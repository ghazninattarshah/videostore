
var winston = require('winston');
var config = require('./config');

var logger = new winston.Logger();

logger.add(winston.transports.Console, {
    timestamp: true,
    json: false,
    colorize: true
});

logger.add(winston.transports.File, {
    filename: config.root + '/videostore.log',
    handleExceptions: true,
    timestamp: true,
    json: false,
    exitOnError: false,
    level: config.logger.level
});

module.exports = logger;