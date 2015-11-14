let ConsoleService = function($http, SERVER, $state) {
  
  console.log(SERVER);

  // Get List of Employees within an org

  this.getOrgList = function() {
    return $http({
      method: 'GET',
      url: SERVER.URL + '/employees',
      headers: SERVER.CONFIG.headers,
      cache: true
    });
  };
  

};

ConsoleService.$inject = ['$http', 'SERVER', '$state'];

export default ConsoleService;