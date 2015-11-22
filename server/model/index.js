
//creating an object
// any where someone require index.js they will get this object back
module.exports = {
	//key valur paired.
  galway: require('./dbmodel'),
   dublin: require('./dbModel')
};