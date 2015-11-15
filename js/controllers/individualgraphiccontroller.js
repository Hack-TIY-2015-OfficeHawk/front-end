let IndGraphicController = function($scope, $stateParams, ConsoleService) {

  ConsoleService.getEmployee($stateParams.empId).then( (res) => {
    $scope.empAlerts = res.data.alert;
    console.log($scope.empAlerts);

    $scope.beacon1 = [];
    $scope.beacon2 = [];
    $scope.beacon3 = [];

    angular.forEach($scope.empAlerts, function(alert) {

      if (alert.beacon_minor === "1000") {
        $scope.beacon1.push(alert);
      } else if (alert.beacon_minor === "1001") {
        $scope.beacon2.push(alert);
      } else if (alert.beacon_minor === "1002") {
        $scope.beacon3.push(alert);
      }

      return $scope.beacon1, $scope.beacon2, $scope.beacon3;
    });

    let b1 = $scope.beacon1.length;
    let b2 = $scope.beacon2.length;
    let b3 = $scope.beacon3.length;

    $scope.labels = ['Kitchen', 'Ping Pong Table', 'Workspace'];
    $scope.data = [b1, b2, b3];

  });
  
  

};

IndGraphicController.$inject = ['$scope', '$stateParams', 'ConsoleService'];

export default IndGraphicController;