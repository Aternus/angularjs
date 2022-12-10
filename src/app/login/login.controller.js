export default class LoginController {
  static bindings = {};

  constructor($location, AuthN) {
    this.user = {
      email: '',
      password: ''
    };
    this.$location = $location;
    this.AuthN = AuthN;
  }

  onLoginSubmit = async function () {
    if (await this.AuthN.login(this.user)) {
      this.$location.path('/');
    }
  };

  $destroy() {
    this.AuthN.resetErrorMessages();
  }
}
