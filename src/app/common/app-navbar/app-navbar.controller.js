function AppNavbarController($scope, $location, AuthN) {
  $scope.getCurrentUser = AuthN.getCurrentUser;
  $scope.$location = $location;
}

AppNavbarController.bindings = {};

export default AppNavbarController;
