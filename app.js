/**
 * Module dependencies.
 */
var express  = require("express");
var passport = require("passport");

// Initialize the default environment
process.env.NODE_ENV = process.env_NODE_ENV || 'dev';

// Load configuration
var config   = require("./config/config");
var logger   = require("./config/logger"); 

var mongoose = require('mongoose');
var fs = require('fs');

// database initialization
var options = {
    db: {
        native_parser: config.db.nativeParser
    },
    server: {
        poolSize: config.db.poolSize
    },
    user: config.db.username,
    pass: config.db.password
};

var db = mongoose.connect(config.db.url, options, function(err) {

    if (err) {
        logger.error('Problem in Connecting db!');
    } else {
        logger.info('DB Connected!');
    }
});

// Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

//console.log(db);

// Load passport config

var app = express();

// Load express settings
require('./config/express') (app, passport, db);

// Load routes
require('./config/routes') (app, passport, db);

// Start the app by listening on port
var port = process.env.PORT || config.port;
app.listen(port);
console.log("Server started on port " + port);

//Initialize the logger
//logger.init(app, passport, mongoose);

//expose app instance.
exports = module.exports = app;
