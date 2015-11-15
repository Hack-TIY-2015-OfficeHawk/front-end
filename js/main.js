import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-chart.js';

import config from './config';

import AdminController from './controllers/admincontroller';
import HomeController from './controllers/homecontroller';
import RegisterController from './controllers/registercontroller';
import LoginController from './controllers/logincontroller';
import SingleController from './controllers/singlecontroller';
import GraphicController from './controllers/graphiccontroller';
import IndGraphicController from './controllers/individualgraphiccontroller';

import UserService from './services/userservice';
import ConsoleService from './services/consoleservice';

angular
  .module('app', ['ui.router', 'ngCookies', 'chart.js'])
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
  .controller('SingleController', SingleController)
  .controller('GraphicController', GraphicController)
  .controller('IndGraphicController', IndGraphicController)
  .service('UserService', UserService)
  .service('ConsoleService', ConsoleService)
;
