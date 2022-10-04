function LoginController($scope, $routeParams, $http) {
  $scope.homeUrl = '/#!/';
  $scope.registerUrl = `${$scope.homeUrl}register`;
}

LoginController.bindings = {};

export default LoginController;
