function LoginController($scope, $location, AuthN) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.AuthN = AuthN;

  $scope.onLoginSubmit = async function () {
    if (await AuthN.login($scope.user)) {
      $location.path('/');
    }
  };

  $scope.$on('$destroy', function () {
    AuthN.resetErrorMessages();
  });
}

LoginController.bindings = {};

export default LoginController;

export class LoginControllerClass {
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
