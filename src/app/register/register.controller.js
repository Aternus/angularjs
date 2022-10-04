function RegisterController($scope, AuthN) {
  $scope.user = {
    firstName: 'first name',
    lastName: 'last name',
    email: 'abc@abc.com',
    password: '123123'
  };
  $scope.onRegisterSubmit = async function () {
    await AuthN.register($scope.user);
  };
  $scope.getRegisterErrorMessage = AuthN.getRegisterErrorMessage;
}

RegisterController.bindings = {};

export default RegisterController;
