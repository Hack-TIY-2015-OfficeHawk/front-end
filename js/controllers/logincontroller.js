let LoginController = function($scope, $state, UserService) {

  $scope.login = function (user) {
    UserService.userLogin(user).then( (res) => {
      console.log(res);
      UserService.userSuccess(res);
    });
  };

};

LoginController.$inject = ['$scope', '$state', 'UserService'];

export default LoginController;