let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      controller: 'RegisterController',
      templateUrl: 'templates/register.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.admin', {
      url: '/admin',
      controller: 'AdminController',
      templateUrl: 'templates/admin.tpl.html'
    })
  
    .state('root.single', {
      url: '/single/:empId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;