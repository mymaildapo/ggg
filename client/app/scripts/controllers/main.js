'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$routeParams, dublin, galway)  //dublin is gotten from  app and they must b d same name/from this line .factory('galway', function(galwayRestangular) {
   {
  
  $scope.toiletLibrary = dublin.one($routeParams.toilet).get().$object + galway.one($routeParams.toilet).get().$object;//dublin  from above function ($scope,$routeParams, dublin) must be d same name
});
