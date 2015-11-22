'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GalwayEditCtrl
 * @description
 * # GalwayEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GalwayEditCtrl', function ( $scope, $routeParams , galway ,$location) {
  $scope.editGalway= true;
  $scope.Galway = {};

  
  galway.one($routeParams.id).get().then(function(Galway) {
    $scope.Galway = Galway;
    $scope.saveGalway = function() { 
      $scope.Galway.save().then(function() {
        $location.path('/galway/' + $routeParams.id);
      });
    };
  });
});

 