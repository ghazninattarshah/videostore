'use strict';

/**
 * Module dependencies
 */
var express    = require('express');
var mongoStore = require('connect-mongo') (express);
var helpers    = require('view-helpers');
var config     = require('./config');

module.exports = function(app, passport, db) {

	// Show stack trace on error
	app.set('showStackError', config.showStackError);

	// Pretty HTML
	app.locals.pretty = config.prettyHTML;

	// Response compression for json, text, javascript and css type files
	app.use(express.compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// Ignore logger for test environment
	if (process.env.NODE_ENV !== 'test') {
		app.use(express.logger('dev'));
	}

	// Sets the views, template engine and default layouts
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');
	
	// Enable jsonp
	app.enable("jsonp callback");

	app.configure(function() {

		//cookie parser should be above session
		app.use(express.cookieParser());

		// Request body parsing 
		app.use(express.json());
		app.use(express.methodOverride());
		
		// express/mongo session storage
		app.use(express.session({
			secret: config.db.password,
			store: new mongoStore({
				db: db.connection.db,
				collection: 'sessions'
			})
		}));

		// Helpers
		app.use(helpers(config.app.name));

		// Use passport session
		//app.use(passport.initialize());
		//app.use(passport.session());

		// Router
		app.use(app.router);

		app.use(express.favicon());
		app.use(express.static(config.root + '/public'));

		// 404 page
		app.use(function(err, req, res, next) {

			if (~err.message.indexOf('not found')) return next();

			console.error(err.stack);

			res.status(500).render('500', {
				error: err.stack
			});
		});

        //Assume 404 since no middleware responded
        app.use(function(req, res, next) {
            res.status(404).render('404', {
                url: req.originalUrl,
                error: 'Not found'
            });
        });
	});
};
