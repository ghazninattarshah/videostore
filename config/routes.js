'use strict';

module.exports = function(app, passport, auth) {

	// Index route
	var index = require('../app/controllers/index');
	var videos = require('../app/controllers/videos');

	app.get('/', index.render);
	app.get('/videos', videos.find);
};
