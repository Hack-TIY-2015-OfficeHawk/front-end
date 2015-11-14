let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.admin', {
      url: '/admin',
      templateUrl: 'templates/admin.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;