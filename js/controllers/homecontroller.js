import $ from 'jquery';

let HomeController = function($scope, $state, $timeout) {
  

  $scope.playlogin = function() {
      
      let a = document.getElementById('loginsound');
      a.play();
      $timeout(function() {
        $state.go('root.login');
      }, 0);
    };


  $scope.playregister = function() {
      let a = document.getElementById('loginsound');
      a.play();
      $timeout(function() {
        $state.go('root.register');
      }, 0);
  };


};

  
  
HomeController.$inject = ['$scope', '$state', '$timeout'];

export default HomeController;





