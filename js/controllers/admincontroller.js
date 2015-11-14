let AdminController = function($scope, $state, UserService) {
  
  $scope.logout = function () {
    UserService.userLogout();
  };  

  $scope.addOrg = function (organization) {
    UserService.addOrg(organization).then( (response) => {
      console.log(response);
      $state.reload();
    });
  };

};

AdminController.$inject = ['$scope', '$state', 'UserService'];

export default AdminController;