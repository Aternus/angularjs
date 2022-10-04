import angular from 'angular';
import {firebaseApp} from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

function AuthN($rootScope) {
  const auth = getAuth(firebaseApp);

  const state = {
    currentUser: auth.currentUser,
    registerErrorMessage: ''
  };

  onAuthStateChanged(auth, function authStateChangeHandler(user) {
    if (user) {
      state.currentUser = user;
    } else {
      state.currentUser = null;
    }
    $rootScope.$applyAsync();
  });

  return {
    getCurrentUser,
    getRegisterErrorMessage,
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

  async function register(user) {
    try {
      state.registerErrorMessage = '';
      const {email, password} = user;
      await createUserWithEmailAndPassword(auth, email, password);
      state.currentUser = auth.currentUser;
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
  }

  function login() {}

  function logout() {}
}

angular.module('services', []).factory('AuthN', AuthN);
