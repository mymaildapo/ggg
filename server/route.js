
//it assign a controller to a given route
module.exports = {
	//at give galway route, i want to load and execute the controller
  '/galway': require('./controller/galwayController'),
   '/dublin': require('./controller/dublinController')

};
