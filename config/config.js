'use strict';

// load the performance utility
var _ = require('lodash');

module.exports = _.extend(

	require(__dirname + '/../config/env/all.js'),
	require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js' || {})
);