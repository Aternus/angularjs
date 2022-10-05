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
