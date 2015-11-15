let GraphicController = function($scope, ConsoleService) {
  
  ConsoleService.getBeacon().then( (response) => {
    $scope.allBeacons = response.data.alert;
    console.log($scope.allBeacons);

    $scope.beacon1 = [];
    $scope.beacon2 = [];
    $scope.beacon3 = [];

    angular.forEach($scope.allBeacons, function(beacons) {

      if (beacons.beacon_minor === "1000") {
        $scope.beacon1.push(beacons);
      } else if (beacons.beacon_minor === "1001") {
        $scope.beacon2.push(beacons);
      } else if (beacons.beacon_minor === "1002") {
        $scope.beacon3.push(beacons);
      }

      return $scope.beacon1, $scope.beacon2, $scope.beacon3;
    });

    let b1 = $scope.beacon1.length;
    let b2 = $scope.beacon2.length;
    let b3 = $scope.beacon3.length;

    console.log(b1, b2, b3);

    $scope.labels = ['Kitchen', 'Ping Pong Table', 'Workspace'];
    $scope.data = [b1, b2, b3];
    $scope.type = 'PolarArea';

    $scope.toggle = function () {
      $scope.type = $scope.type === 'PolarArea' ? 'Pie' : 'PolarArea';
    };
  });


};

GraphicController.$inject = ['$scope', 'ConsoleService'];

export default GraphicController;