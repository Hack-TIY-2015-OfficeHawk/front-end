import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AdminController from './controllers/admincontroller';
import HomeController from './controllers/homecontroller';
import RegisterController from './controllers/registercontroller';
import LoginController from './controllers/logincontroller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'dq5iAypTudbRBQ8AVGoyrEr5dqf22zbLVCTCX8B4',
        'X-Parse-REST-API-Key': 'rZOdKHikIYkpGw406yxkFyushZwBX54F9VufOKbR'
      }
    }
  })
  .config(config)
  .controlller('AdminController', AdminController)
  .controller('HomeController', HomeController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController);
