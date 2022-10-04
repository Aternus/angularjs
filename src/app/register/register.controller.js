function RegisterController($scope) {
  console.log({$scope});

  $scope.user = {};
  $scope.onRegisterSubmit = function (...args) {
    console.log($scope.user);
  };
}

RegisterController.bindings = {};

export default RegisterController;
