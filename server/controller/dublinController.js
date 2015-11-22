//load depencency node-restful-it take a mongoose model and then convert it into rest API

var restful = require('node-restful');
// provide call back  function  to pass in  app and route  of this controller
module.exports = function(app, route) {

  // Setup the controller for REST.
  //define what pass to the restful module
  var rest = restful.model
  (
    //providing the name
    'dublin',
    // pass in the model I am trying to connect to
    app.models.dublin
  ) .methods(['get', 'put', 'post', 'delete']);//passing all of the method we expose to this methods function.
  //i want to provide 'get', 'put', 'post', 'delete'

  // Register this endpoint with the application.
  //Register this rest API at  this route
    rest.register(app, route);

  // Return middleware to the server.js
  return function(req, res, next) {
    next();
  };
};