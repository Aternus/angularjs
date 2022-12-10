export default class LoginController {
  static bindings = {};
  static $inject = ['$location', 'AuthN'];

  constructor($location, AuthN) {
    this.user = {
      email: '',
      password: ''
    };
    this.$location = $location;
    this.AuthN = AuthN;
  }

  $onDestroy() {
    this.AuthN.resetErrorMessages();
  }

  async onLoginSubmit() {
    if (await this.AuthN.login(this.user)) {
      this.$location.path('/');
    }
  }
}
