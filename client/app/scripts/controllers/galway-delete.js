'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GalwayDeleteCtrl
 * @description
 * # GalwayDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GalwayDeleteCtrl',  function ($scope, $routeParams,galway,$location) 
  {
  $scope.Galway =  galway.one($routeParams.id).get().$object;
  $scope.deleteGalway = function() {
    $scope.Galway.remove().then(function() {
      $location.path('/galway');
    });
  };
  $scope.back = function() {  
    $location.path('/galway');
  };
});
