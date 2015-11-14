let LoginController = function($scope, $state, UserService, $cookies) {

  $scope.login = function (user) {
    UserService.userLogin(user).then( (res) => {
      console.log(res);
      UserService.loginSuccess(res);
    });
  };
  


LoginController.$inject = ['$scope', '$state', 'UserService', '$cookies'];

export default LoginController;