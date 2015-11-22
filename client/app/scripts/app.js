'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    //configure restangular
    'restangular' //bringing restangular module in
   ]).config(function ($routeProvider, RestangularProvider)   {// add RestangularProvider as augument 

    // Set the base URL for Restangular provide
    //This provide a base for every API that get sent from my application.
    //Point to the rest API server that i just created
    RestangularProvider.setBaseUrl('http://localhost:3001'); //

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/galway', {
        templateUrl: 'views/galway.html',
        controller: 'GalwayCtrl'
      })
      .when('/dublin', {
        templateUrl: 'views/dublin.html',
        controller: 'DublinCtrl'
      })
      .when('/default', {
        templateUrl: 'views/default.html',
        controller: 'DefaultCtrl'
      })
      .when('/Admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/create/dublin', {
        templateUrl: 'views/dublin-add.html',
        controller: 'DublinAddCtrl'
      })
      .when('/dublin/:id/delete', {
        templateUrl: 'views/dublin-delete.html',
        controller: 'DublinDeleteCtrl'
      })
      .when('/create/galway', {
        templateUrl: 'views/galway-add.html',
        controller: 'GalwayAddCtrl'
      })
      .when('/galway/:id/delete', {
        templateUrl: 'views/galway-delete.html',
        controller: 'GalwayDeleteCtrl'
      })
      .when('/galway/:id/edit', {
        templateUrl: 'views/galway-edit.html',
        controller: 'GalwayEditCtrl'
      })
      .when('/dublin/:id/edit', {
        templateUrl: 'views/dublin-edit.html',
        controller: 'DublinEditCtrl',
        controllerAs: 'dublinEdit'
      })
      .when('/galway/:id', {
        templateUrl: 'views/galway-view.html',
        controller: 'GalwayViewCtrl',
        controllerAs: 'galwayView'
      })
    
      .when('/dublin/:id', {
        templateUrl: 'views/dublin-view.html',
        controller: 'DublinViewCtrl',
        controllerAs: 'dublinView'
      })
      .when('/create/dublin', {
        templateUrl: 'views/dublin-add.html',
        controller: 'DublinAddCtrl',
        controllerAs: 'dublinAdd'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory('galwayRestangular', function(Restangular) { // add galway factory.Reason for this is because the API from server provide_id
    //restangular expect it to be id without _
//Restangular object with a provided configuration, that configuration to change _id to id.
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        //  so I change the name to id
        id: '_id'
      });
    });
  })//galway-object i can include in my controller, that give me ability to create new and Listen to galway library details 
  //then pass in galwayRestangular factory i created above.
  .factory('galway', function(galwayRestangular) { // galway: see controller
    // then we return galwayRestangular services of galway which point to the url within my Api
    // so at galway API url i want to use galway object to point to the galway inpoint
    return galwayRestangular.service('galway');
  })

.factory('dublinRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('dublin', function(dublinRestangular) {
    return dublinRestangular.service('dublin'); //dublin is da url name at 127.0.0.1:30001/dublin
  });