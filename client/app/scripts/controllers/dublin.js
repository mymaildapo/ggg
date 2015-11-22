
'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DublinCtrl
 * @description
 * # DublinCtrl
 * Controller of the clientApp
 */

angular.module('clientApp') // passin in the dublin object
  .controller('DublinCtrl', function ( $scope, dublin) 
  {
  	// then pass in restangular project. To get the list. i used getList and $object auto populate itself with the result
  	//which go to the server fetches the list and dynamically changes this object.
  	//two way binding where it binds object to dublinLibrary.
  	//Any time you change that object it changes the scope variable as well automatically
    $scope.dublinLibrary =dublin.getList().$object;  
  }
  );
