function LoginController($scope, $location, AuthN) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.onLoginSubmit = async function () {
    if (await AuthN.login($scope.user)) {
      $location.path('/');
    }
  };
  $scope.getLoginErrorMessage = AuthN.getLoginErrorMessage;
}

LoginController.bindings = {};

export default LoginController;
