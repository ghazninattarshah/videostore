'use strict';

var mongoose = require('mongoose');
var Video = mongoose.model('Video'); //require('../model/Video');
var logger = require('../../config/logger');

var _ = require('lodash');

exports.find = function (req, res) {

    console.log("loading videos...");
    Video.find({}, function (err, videos) {

		console.log("videos loaded:" + videos.length);

		if (err) {

			logger.error(err);
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(videos);
		}
	});
};