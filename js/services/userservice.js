let UserService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  // check for auth token

  this.checkAuth = function () {
    let token = $cookies.get('auth-Token');

    token = SERVER.CONFIG.headers.auth_token;

    if (token) {
      return $http.get(SERVER.URL + 'check' + SERVER.CONFIG);
    } else {
      $state.go('root.home');
    }
  };

  // user login

  this.userLogin = function (userObj) {
    return $http.post(SERVER.URL + '/employees/login', userObj, SERVER.CONFIG);
  };

  this.userSuccess = function (res) {
    $cookies.put('auth-Token', res.data.auth_token);
    SERVER.CONFIG.headers.auth_token = res.data.auth_token;
    $state.go('root.admin');
  };

  // user logout

  this.userLogout = function () {
    $cookies.remove('auth-Token');
    SERVER.CONFIG.headers.auth_token = null;
    $state.go('root.home');
  };

  // register a new user/manager
  
  let User = function (obj) {
    this.username = obj.username;
    this.password = obj.password;
    this.name = obj.name;
  };

  this.addUser = function (obj) {
    let u = new User(obj);
    return $http.post(SERVER.URL + '/organizations', u, SERVER.CONFIG);
  };

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;