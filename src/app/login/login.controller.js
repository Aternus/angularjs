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
}

LoginController.bindings = {};

export default LoginController;
