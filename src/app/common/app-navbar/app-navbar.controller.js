export default class AppNavbarController {
  static bindings = {};

  constructor($location, AuthN) {
    this.$location = $location;
    this.getCurrentUser = AuthN.getCurrentUser;
  }
}
