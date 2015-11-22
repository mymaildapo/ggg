'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DublinViewCtrl
 * @description
 * # DublinViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DublinViewCtrl',  function ($scope,$routeParams, dublin)  
   {
	  $scope.viewDublin = true; //tabs to the my navigation page
	  // assign dublin object, then using retangular object one($routeParams.id).
	  // I am telling the routeParams command to assign whatever is at that location to the id value of  routeParams then am going to get it and assign object to it
	  $scope.dublin = dublin.one($routeParams.id).get().$object;
	}
);
