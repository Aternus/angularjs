export default class RegisterController {
  static bindings = {};
  static $inject = ['$location', 'AuthN'];

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

  $onDestroy() {
    this.AuthN.resetErrorMessages();
  }

  async onRegisterSubmit() {
    if (await this.AuthN.register(this.user)) {
      this.$location.path('/');
    }
  }
}
