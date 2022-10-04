function AppFooterController($scope, $routeParams, $http) {
  const date = new Date();
  $scope.currentYear = date.getFullYear();
}

AppFooterController.bindings = {};

export default AppFooterController;
