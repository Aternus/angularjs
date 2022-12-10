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

  $destroy() {
    this.AuthN.resetErrorMessages();
  }

  onLoginSubmit = async function () {
    if (await this.AuthN.login(this.user)) {
      this.$location.path('/');
    }
  };
}
