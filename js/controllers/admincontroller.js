let AdminController = function($scope, $state, UserService, ConsoleService, $cookies, $interval) {
  
  $scope.logout = function () {
    UserService.userLogout();
  };  

  ConsoleService.getOrgList().then( (response) => {
    console.log(response.data);
    $scope.employees = response.data.employees;
  });

  $interval(ConsoleService.getBeacon().then( (response) => {
    console.log(response.data);
    $scope.deez = response.data.alert;
  }), 1000);

};

AdminController.$inject = ['$scope', '$state', 'UserService', 'ConsoleService', '$cookies', '$interval'];

export default AdminController;