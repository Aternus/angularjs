function LoginController($scope) {
  console.log({$scope});

  $scope.user = {};
  $scope.onLoginSubmit = function (...args) {
    console.log($scope.user);
  };
}

LoginController.bindings = {};

export default LoginController;
