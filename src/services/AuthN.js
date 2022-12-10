import angular from 'angular';
import {firebaseApp} from '../firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore';

class AuthN {
  static $inject = ['$rootScope'];

  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.state = {
      currentUser: null,
      isProcessing: false,
      registerErrorMessage: '',
      loginErrorMessage: ''
    };
    this.firebaseDb = getFirestore(firebaseApp);
    this.firebaseAuth = getAuth(firebaseApp);
    onAuthStateChanged(this.firebaseAuth, this.authStateChangeHandler);
  }

  authStateChangeHandler = async (user) => {
    const usersCollection = collection(this.firebaseDb, 'users');
    this.resetErrorMessages();
    if (user) {
      const q = query(usersCollection, where('uid', '==', user.uid));
      const qSnapshot = await getDocs(q);
      if (qSnapshot.size === 1) {
        this.state.currentUser = qSnapshot.docs.pop().data();
      } else {
        this.state.currentUser = null;
        this.state.loginErrorMessage =
          'Something went wrong. Please try again.';
      }
    } else {
      this.state.currentUser = null;
    }
    this.$rootScope.$applyAsync();
  };

  getCurrentUser() {
    return this.state.currentUser;
  }

  getRegisterErrorMessage() {
    return this.state.registerErrorMessage;
  }

  getLoginErrorMessage() {
    return this.state.loginErrorMessage;
  }

  resetErrorMessages() {
    this.state.registerErrorMessage = '';
    this.state.loginErrorMessage = '';
  }

  isProcessing() {
    return this.state.isProcessing;
  }

  async register(user) {
    try {
      this.state.isProcessing = true;
      this.state.registerErrorMessage = '';
      const {email, password} = user;
      const userCredential = await createUserWithEmailAndPassword(
        this.firebaseAuth,
        email,
        password
      );
      const usersCollection = collection(this.firebaseDb, 'users');
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
          this.state.registerErrorMessage = 'Invalid email address.';
          break;
        case 'auth/email-already-in-use':
          this.state.registerErrorMessage = 'Email already in use.';
          break;
        case 'auth/weak-password':
          this.state.registerErrorMessage =
            'Weak password. Password length must be at least 6 characters.';
          break;
        default:
          this.state.registerErrorMessage = message;
      }
      return false;
    } finally {
      this.state.isProcessing = false;
      this.$rootScope.$applyAsync();
    }
  }

  async login(user) {
    try {
      this.state.isProcessing = true;
      this.state.loginErrorMessage = '';
      const {email, password} = user;
      await signInWithEmailAndPassword(this.firebaseAuth, email, password);
      return true;
    } catch ({code, message}) {
      switch (code) {
        case 'auth/user-not-found':
          this.state.loginErrorMessage = 'User not found.';
          break;
        case 'auth/wrong-password':
          this.state.loginErrorMessage = 'Wrong password.';
          break;
        default:
          this.state.loginErrorMessage = String(message).replace(
            'Firebase:',
            ''
          );
      }
      return false;
    } finally {
      this.state.isProcessing = false;
      this.$rootScope.$applyAsync();
    }
  }

  async logout() {
    try {
      this.state.isProcessing = true;
      await signOut(this.firebaseAuth);
      return true;
    } catch (e) {
      return false;
    } finally {
      this.state.isProcessing = false;
      this.$rootScope.$applyAsync();
    }
  }
}

angular.module('angularjsServices').factory('AuthN', AuthN);
