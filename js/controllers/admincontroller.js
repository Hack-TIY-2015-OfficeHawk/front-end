let AdminController = function($scope, $state, UserService, ConsoleService) {
  
  $scope.logout = function () {
    UserService.userLogout();
  };  

  $scope.addOrg = function (organization) {
    UserService.addOrg(organization).then( (response) => {
      console.log(response);
      $state.reload();
    });
  };

  ConsoleService.getOrgList().then( (response) => {
    console.log(response.data.employees);
    $scope.employees = response.data.employees;
  });



};

AdminController.$inject = ['$scope', '$state', 'UserService', 'ConsoleService'];

export default AdminController;