'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GalwayCtrl
 * @description
 * # GalwayCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')

//load this from Restuful Api
//by using Restangular
  .controller('GalwayCtrl', function ( $scope, galway) 
  {
    $scope.galwayLibrary =galway.getList().$object;  
  }
  );

