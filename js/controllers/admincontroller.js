let AdminController = function($scope, $state, UserService) {
  
  $scope.logout = function () {
    UserService.userLogout();
  };  

};

AdminController.$inject = ['$scope', '$state', 'UserService'];

export default AdminController;