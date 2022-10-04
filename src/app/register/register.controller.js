function RegisterController($scope, $location, AuthN) {
  $scope.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  $scope.onRegisterSubmit = async function () {
    await AuthN.register($scope.user);
    $location.path('/');
  };
  $scope.getRegisterErrorMessage = AuthN.getRegisterErrorMessage;
}

RegisterController.bindings = {};

export default RegisterController;
