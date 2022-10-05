import angular from 'angular';
import {firebaseApp} from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';

function AuthN($rootScope) {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const usersCollection = collection(db, 'users');

  const state = {
    currentUser: null,
    isProcessing: false,
    registerErrorMessage: '',
    loginErrorMessage: ''
  };

  onAuthStateChanged(auth, async function authStateChangeHandler(user) {
    state.loginErrorMessage = '';
    state.registerErrorMessage = '';
    if (user) {
      const q = query(usersCollection, where('uid', '==', user.uid));
      const qSnapshot = await getDocs(q);
      if (qSnapshot.size === 1) {
        state.currentUser = qSnapshot.docs.pop().data();
      } else {
        state.currentUser = null;
        state.loginErrorMessage = 'Something went wrong. Please try again.';
      }
    } else {
      state.currentUser = null;
    }
    $rootScope.$applyAsync();
  });

  return {
    getCurrentUser,
    getRegisterErrorMessage,
    getLoginErrorMessage,
    isProcessing,
    register,
    login,
    logout
  };

  function getCurrentUser() {
    return state.currentUser;
  }

  function getRegisterErrorMessage() {
    return state.registerErrorMessage;
  }

  function getLoginErrorMessage() {
    return state.loginErrorMessage;
  }

  function isProcessing() {
    return state.isProcessing;
  }

  async function register(user) {
    try {
      state.isProcessing = true;
      state.registerErrorMessage = '';
      const {email, password} = user;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(usersCollection, {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: Date.now()
      });
      return true;
    } catch ({code, message}) {
      switch (code) {
        case 'auth/invalid-email':
          state.registerErrorMessage = 'Invalid email address.';
          break;
        case 'auth/email-already-in-use':
          state.registerErrorMessage = 'Email already in use.';
          break;
        case 'auth/weak-password':
          state.registerErrorMessage =
            'Weak password. Password length must be at least 6 characters.';
          break;
        default:
          state.registerErrorMessage = message;
      }
      return false;
    } finally {
      state.isProcessing = false;
      $rootScope.$applyAsync();
    }
  }

  async function login(user) {
    try {
      state.isProcessing = true;
      state.loginErrorMessage = '';
      const {email, password} = user;
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch ({code, message}) {
      switch (code) {
        case 'auth/user-not-found':
          state.loginErrorMessage = 'User not found.';
          break;
        case 'auth/wrong-password':
          state.loginErrorMessage = 'Wrong password.';
          break;
        default:
          state.loginErrorMessage = String(message).replace('Firebase:', '');
      }
      return false;
    } finally {
      state.isProcessing = false;
      $rootScope.$applyAsync();
    }
  }

  async function logout() {
    try {
      state.isProcessing = true;
      await signOut(auth);
      return true;
    } catch (e) {
      return false;
    } finally {
      state.isProcessing = false;
      $rootScope.$applyAsync();
    }
  }
}

angular.module('services', []).factory('AuthN', AuthN);
