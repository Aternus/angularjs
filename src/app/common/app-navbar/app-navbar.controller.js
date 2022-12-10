export default class AppNavbarController {
  static bindings = {};
  static $inject = ['$location', 'AuthN'];

  constructor($location, AuthN) {
    this.$location = $location;
    this.getCurrentUser = AuthN.getCurrentUser;
  }

  getFullName() {
    const currentUser = this.getCurrentUser();
    return `${currentUser.firstName} ${currentUser.lastName}`;
  }
}
