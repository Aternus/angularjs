function RegisterController($scope, $location, AuthN) {
  $scope.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  $scope.AuthN = AuthN;

  $scope.onRegisterSubmit = async function () {
    if (await AuthN.register($scope.user)) {
      $location.path('/');
    }
  };

  $scope.$on('$destroy', function () {
    AuthN.resetErrorMessages();
  });
}

RegisterController.bindings = {};

export default RegisterController;
