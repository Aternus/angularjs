function AppFooterController($scope) {
  const date = new Date();
  $scope.currentYear = date.getFullYear();
}

AppFooterController.bindings = {};

export default AppFooterController;
