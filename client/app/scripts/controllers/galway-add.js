'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GalwayAddCtrl
 * @description
 * # GalwayAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GalwayAddCtrl', function ($scope, galway, $location) 
{

   $scope.Galway = {}; 

 $scope.saveGalway = function() {

    galway.post($scope.Galway).then(function() { 

      $location.path('/galway');
    });
  };
});
