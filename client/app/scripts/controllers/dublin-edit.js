'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DublinEditCtrl
 * @description
 * # DublinEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DublinEditCtrl', function ( $scope, $routeParams , dublin ,$location) {
  


  $scope.editDublin = true;
  $scope.Dublin = {}; //declearing Dublin as empty object

  
  dublin.one($routeParams.id).get().then(function(Dublin) { // call one. I am loading Dublin at whatever the id parameter is,fetch it at that id then call back with values of the Dublin fields.
    $scope.Dublin = Dublin;//then setting the  $scope.Dublin to whatever was pass from to me from above
    $scope.saveDublin = function() { //then I am providing that saveDublin method
//then i am saving the change . then i do i call back function.
      $scope.Dublin.save().then(function() {
        $location.path('/dublin/' + $routeParams.id);
      });
    };
  });
});

 