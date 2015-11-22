//pulling in moodule and assigning it to a variable
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var load_ = require('lodash');

// Creating the express application
var app = express();

//  express all us to Add Middleware necessary for REST API's
//middleware intercept intself into the request. every request it intercept and then it provide somethin unique to that plug in
// we goin to use urlencoded, jason
app.use(bodyParser.urlencoded({extended: true}));
// it will intercept a request to tell it to use json  in coding.
app.use(bodyParser.json());
// it will intercept to tell it to inject and allow http ovveride.allow to use e.g put and other http method
app.use(methodOverride('X-HTTP-Method-Override'));

// Add more middleware CORS Support- it allow my Api to 
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');// all uri that accesing my server(public Api).Api to nobody that want to acces them.
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB to the localhost and name of the database
mongoose.connect('mongodb://localhost/library');
mongoose.connection.once('open', function() {

  // Load the models by assigning to the app.This allow me to pass around the app object and dependency inject that into the controller
  //it allow the controller to have access to all the model while at he same time the model doesnt need to know anything about the controller
  app.models = require('./model/index');

  // Load the routes.
  //get all of the routes
  var routes = require('./route');
//iterate over all the routes
//each method assign the value,the controller and then assign the key which is the route
  load_.each(routes, function(controller, route) 
  {
    //declearing, I am calling that route then the  function(app, route) in the controller
    //return of this controller is goin to be middleware.  back from controller see line 22 in dublincontroller.js
    app.use(route, controller(app, route));
  });

  //print it out
  console.log('Listening on port 3001...');
  //listening
  app.listen(3001);
});
