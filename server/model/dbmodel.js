//give interface into mongodb which also allow to provide model to mongodb that map directly into database
 
var mongoose = require('mongoose');

// Create the Schemma.. where I define all property for this object
// create a component
var LibrarySchema = new mongoose.Schema({
 phone: {
    type: String,
    required: true
  },
   name: {
    type: String,
    required: true
  },
    address: {
    type: String,
    required: true
  },

  town: {
    type: String,
    required: true
  },

  toilet: {
    type: String,
    required: true
  }
});

// Export the model schema.
//asign the component into module export because whoever requires it that what I passing back to them
module.exports = LibrarySchema;