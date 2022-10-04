function RegisterController($scope, AuthN) {
  $scope.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  $scope.onRegisterSubmit = async function () {
    await AuthN.register($scope.user);
  };
  $scope.getRegisterErrorMessage = AuthN.getRegisterErrorMessage;
}

RegisterController.bindings = {};

export default RegisterController;
