'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GalwayViewCtrl
 * @description
 * # GalwayViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GalwayViewCtrl',  function ($scope,$routeParams, galway)  //dublin is gotten from  app and they must b d same name/from this line .factory('galway', function(galwayRestangular) {
   {
  $scope.viewGalway = true;
  $scope.galway = galway.one($routeParams.id).get().$object;//dublin  from above function ($scope,$routeParams, dublin) must be d same name
});
