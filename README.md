#Library Access in County Galway and  County Dublin
**Admin by Dapo Oloruntola **
![alt tag](http://oi67.tinypic.com/2mq9ugm.jpg)

#Here are a few short sentences about my project
I made build an Api with server that can access databose from the mongodatabase. This is posible by using the moduble mongoose.
from the backend you can following methods methods to quer and request from Api  using the following method(['get', 'put', 'post', 'delete' then give you the result back on the front-end.The front-end tools I used is Yeoman easier way to generate buttons ,pages, e.t.c.. With Yeoman it possible for the user to add/POST new data to the dataset, View/Get data from the mongodb, delete data from the dataset, and put/Update the database.

#DEMO
in cmd run
Server>node server
Listening on port 3001...

2nd cmd run
Client>Grunt serve
Started connect web server on http://localhost:9000
http://localhost:9000/#/galway-: display Galway dataset from mongodb. and http://localhost:9000/#/dublin -: display dublin dataset from mongodb
![alt tag](http://oi68.tinypic.com/14o68g8.jpg)
# 2 Datasetsgotten from data.gov#
1-  galway county library
https://data.gov.ie/dataset/county-galway-libraries

2-  dublin county library
http://www.dublinked.ie/datastore/server/FileServerWeb/FileChecker?metadataUUID=b61ffc869fc64036941d8b2a9d167ae1&filename=DCC_PublicLibrariesAccessibility2011List_P20111003-1720.csv

# Code used to query the dataset  in my Project by using Restangular
  
1- GET all the data in one collection.  e.g At url  /galway
 ```js
  angular.module('clientApp') // passin in the dublin object
  .controller('DublinCtrl', function ( $scope, dublin) 
  {
    $scope.dublinLibrary =dublin.getList().$object;  
  }
 );
  url: http://localhost:9000/#/galway. 
   ```
 * GET Just ONE  . This will get one data according to the id click on.  e.g At url  galway/564cd25c7ead370f06a8aae8
  ```js
 $scope.dublin = dublin.one($routeParams.id).get().$object;
   ```
   
   3- POST new data with a new unique id at url /dublin
 ```js
 dublin.post($scope.Dublin).then(function() { 
      $location.path('/dublin');
    });
   ```
 4- DELETE specify id in the database, but frist GET data using id then delete it if requiree.g At url /galway/564cd25c7ead370f06a8aae8/delete
  ```js
angular.module('clientApp')
  .controller('DublinDeleteCtrl',  function ($scope, $routeParams,dublin,$location) 
  {
  $scope.Dublin =  dublin.one($routeParams.id).get().$object;
  $scope.deleteDublin = function() {
    $scope.Dublin.remove().then(function() {
      $location.path('/dublin');
    });
  };
  $scope.back = function() {  
    $location.path('/dublin');
  };
});
   ```
   5 PUT edit and update the current data. first GET data in  input using id  then edit using input/textbox. e.g at url /galway/564cd25c7ead370f06a8aae8/edit 
    ```js
.controller('DublinEditCtrl', function ( $scope, $routeParams , dublin ,$location) {
  $scope.editDublin = true;
  $scope.Dublin = {}; 
  dublin.one($routeParams.id).get().then(function(Dublin) { 
    $scope.Dublin = Dublin;
    $scope.saveDublin = function() { 
      $scope.Dublin.save().then(function() {
        $location.path('/dublin/' + $routeParams.id);
      });
    };
  });
});
   ```
#Back-End
Used Angular js,Restangular,Mongodb

#FRONT-END
Yeoman

To run this project! 
you need to install yeoman bower and grunt on your computer!

References
https://github.com/mgonto/restangular

