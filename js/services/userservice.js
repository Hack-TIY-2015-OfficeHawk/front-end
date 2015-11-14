let UserService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  // check for auth token

  this.checkAuth = function () {
    let token = $cookies.get('auth-Token');

    token = SERVER.CONFIG.headers['X-AUTH-TOKEN'];

    if (token) {
      return $http.get(SERVER.URL + 'check' + SERVER.CONFIG);
    } else {
      $state.go('root.home');
    }
  };

  // user login

  this.userLogin = function (userObj) {
    return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
  };

  this.userSuccess = function (res) {
    $cookies.put('auth-Token', res.data.auth_token);
    SERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.auth_token;
    $state.go('root.admin');
  };

  // user logout

  this.userLogout = function () {
    // $cookies.remove('auth-Token');
    // SERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.home');
  };

  // register a new user/manager
  
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