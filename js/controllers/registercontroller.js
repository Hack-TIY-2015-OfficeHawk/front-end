let RegisterController = function($scope, $state, UserService) {
  
  $scope.addUser = (user) => {
    UserService.addUser(user).then( (res) => {
      $scope.user = {};
      console.log(res);
    });
    $state.go('root.home');
  };

};

RegisterController.$inject = ['$scope', '$state', 'UserService'];

export default RegisterController;