let UserService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/employees';

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

UserService.$inject = ['$http', 'PARSE'];

export default UserService;