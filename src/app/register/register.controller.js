export default class RegisterController {
  static bindings = {};

  constructor($location, AuthN) {
    this.$location = $location;
    this.AuthN = AuthN;
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  $destroy() {
    this.AuthN.resetErrorMessages();
  }

  onRegisterSubmit = async function () {
    if (await this.AuthN.register(this.user)) {
      this.$location.path('/');
    }
  };
}
