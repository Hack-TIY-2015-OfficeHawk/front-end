let AdminController = function($scope, $state, UserService, ConsoleService, $cookies) {
  
  $scope.logout = function () {
    UserService.userLogout();
  };  

  ConsoleService.getOrgList().then( (response) => {
    console.log(response.data);
    $scope.employees = response.data.employees;
  });

  setInterval(
    ConsoleService.getBeacon().then( (response) => {
      console.log(response.data);
      $scope.deez = response.data.alert;
    }), 5000);

};

AdminController.$inject = ['$scope', '$state', 'UserService', 'ConsoleService', '$cookies'];

export default AdminController;