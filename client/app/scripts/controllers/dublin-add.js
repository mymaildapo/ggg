'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DublinAddCtrl
 * @description
 * # DublinAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DublinAddCtrl',  function ($scope, dublin, $location) //dublin is gotten from  app and they must b d same name/from this line .factory('galway', function(galwayRestangular) {
{

   $scope.Dublin= {}; // create a Dublin object and am attaching it to the scope

 $scope.saveDublin = function() 
 {// creating a saveDublin  and am attaching it to the scope

//the scope Dublin changes as I type it into the input fields.
//because of the two way binding concert.As I change the input, it is automatically changing the scope Dublin so I dont have to do any listeners on those input elements
//it just automatically changes the objects
   
    dublin.post($scope.Dublin).then(function() { //so whenever they click saveDublin, it going to call my restangular dublin object it is going to post the object to the /dublin url,then call this call back function
//change the url from dublin-add.html to /dublin.html
      $location.path('/dublin');
    });
  };
});
