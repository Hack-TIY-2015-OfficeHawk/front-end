import $ from 'jquery';

let HomeController = function($scope, $state, $timeout) {
  

  $scope.playlogin = function() {
      
      let a = document.getElementById('loginsound');
      a.play();
      $timeout(function() {
        $state.go('root.login');
      }, 1000);
    };


  $scope.playregister = function() {
      let a = document.getElementById('loginsound');
      a.play();
      $timeout(function() {
        $state.go('root.register');
      }, 1000);
  };


};

  
  
HomeController.$inject = ['$scope', '$state', '$timeout'];

export default HomeController;





