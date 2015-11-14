let UserService = function($http, SERVER, $cookies, $state) {
  
  let User = function (obj) {
    this.userName = obj.username;
    this.email = obj.email;
    this.password = obj.password;
    this.organization = obj.organization;
  };

  this.addUser = function (obj) {
    let u = new User(obj);
    return $http.post(url, u, PARSE.CONFIG);
  };

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;