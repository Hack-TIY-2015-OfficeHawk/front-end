import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';

import AdminController from './controllers/admincontroller';
import HomeController from './controllers/homecontroller';
import RegisterController from './controllers/registercontroller';
import LoginController from './controllers/logincontroller';

import UserService from './services/userservice';
import ConsoleService from './services/consoleservice';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .constant('SERVER', {
    URL: 'https://officehawk.herokuapp.com',
    CONFIG: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })
  .config(config)
  .controller('AdminController', AdminController)
  // .controller('HomeController', HomeController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .service('UserService', UserService)
  .service('ConsoleService', ConsoleService)
;
