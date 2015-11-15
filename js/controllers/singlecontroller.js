let SingleController = function($scope, $state, $stateParams, ConsoleService) {
  
  ConsoleService.getEmployee($stateParams.empId).then( (res) => {
    $scope.singleEmp = res.data;
    console.log(res);
  });

};

SingleController.$inject = ['$scope', '$state', '$stateParams', 'ConsoleService'];

export default SingleController;