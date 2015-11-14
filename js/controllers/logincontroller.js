let LoginController = function($scope, $state, UserService) {
  
  $scope.addUser = (user) => {
    UserService.addUser(user).then( (res) => {
      $scope.user = {};
      console.log(res);
    });
    $state.go('root.home');
  };

};

LoginController.$inject = ['$scope'];

export default LoginController;