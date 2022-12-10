export default class AppNavbarController {
  static bindings = {};
  static $inject = ['$location', 'AuthN'];

  constructor($location, AuthN) {
    this.$location = $location;
    this.AuthN = AuthN;
  }

  isLoggedIn() {
    return Boolean(this.AuthN.getCurrentUser());
  }

  getFullName() {
    const currentUser = this.AuthN.getCurrentUser();
    return `${currentUser.firstName} ${currentUser.lastName}`;
  }
}
