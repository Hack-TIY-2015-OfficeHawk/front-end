let ConsoleService = function($http, SERVER, $state, UserService) {
  
  console.log(SERVER);

  // Get List of Employees within an org

  this.getOrgList = function() {
    UserService.checkAuth();

    return $http({
      method: 'GET',
      url: SERVER.URL + '/employees',
      headers: SERVER.CONFIG.headers,
      cache: true
    });
  };
  

};

ConsoleService.$inject = ['$http', 'SERVER', '$state', 'UserService'];

export default ConsoleService;