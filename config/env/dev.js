'use strict';

module.exports = {

	db: {
		url: "mongodb://localhost/videostore",
		username: 'vs',
		password: 'vspazz',
		nativeParser: true,
		poolSize: 5
	},
	app : {
		name: "videostore"
	},
	logger : {
		level : 'info'
	}
};