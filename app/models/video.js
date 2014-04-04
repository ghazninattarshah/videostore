'use strict';

/**
 * Module dependencies
 * 
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var VideoSchema = new Schema({

	videoId: {
		type: String,
		trim: true
	},
	title: {
		type: String,
		default: '',
		trim: true
	},
	link: {
		type: String, 
		default: '',
		trim: true
	},
	poster: {
		type: String, 
		default: '',
		trim: true
	},
	type: {
		type: String, 
		default: '',
		trim: true
	},
	created: {
		type: Date, 
		default: Date.now
	}}, 

	{ collection: 'Video' }
);

VideoSchema.statics = {

	/*find: function(cb) {

		this.find().exec(cb);
	}*/
};

exports.Video = mongoose.model('Video', VideoSchema);
