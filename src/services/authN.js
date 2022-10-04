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
    registerErrorMessage: '',
    loginErrorMessage: ''
  };

  onAuthStateChanged(auth, async function authStateChangeHandler(user) {
    if (user) {
      const q = query(usersCollection, where('uid', '==', user.uid));
      const qSnapshot = await getDocs(q);
      if (qSnapshot.size === 1) {
        state.currentUser = qSnapshot.docs.pop().data();
      } else {
        state.currentUser = null;
        state.loginErrorMessage = 'Error: something went wrong.';
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
    register,
    login,
    logout
  };

  function getCurrentUser() {
    try {
      return state.currentUser;
    } catch (e) {
      return null;
    }
  }

  function getRegisterErrorMessage() {
    try {
      return state.registerErrorMessage;
    } catch (e) {
      return '';
    }
  }

  function getLoginErrorMessage() {
    try {
      return state.loginErrorMessage;
    } catch (e) {
      return '';
    }
  }

  async function register(user) {
    try {
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
      state.registerErrorMessage = message;
      switch (code) {
        case 'auth/invalid-email':
        case 'auth/email-already-in-use':
          break;
        case 'auth/weak-password':
          break;
      }
    }
    $rootScope.$applyAsync();
    return false;
  }

  async function login(user) {
    try {
      state.loginErrorMessage = '';
      const {email, password} = user;
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch ({code, message}) {
      state.loginErrorMessage = message;
      switch (code) {
        default:
          console.error(code);
      }
    }
    $rootScope.$applyAsync();
    return false;
  }

  async function logout() {
    if (getCurrentUser()) {
      await signOut(auth);
      $rootScope.$applyAsync();
      return true;
    }
    return false;
  }
}

angular.module('services', []).factory('AuthN', AuthN);
