'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DublinDeleteCtrl
 * @description
 * # DublinDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DublinDeleteCtrl',  function ($scope, $routeParams,dublin,$location) 
  {
    //loading Dublin details 
  $scope.Dublin =  dublin.one($routeParams.id).get().$object;
  //deleteDublin() function call back , am call remove function
  $scope.deleteDublin = function() {
    // calling scope to remove dublin library details
    $scope.Dublin.remove().then(function() {
      //once it's done i am going back to /dublin page
      $location.path('/dublin');
    });
  };
  //go back function call back to /dublin
  $scope.back = function() {  
    $location.path('/dublin');
  };
});
