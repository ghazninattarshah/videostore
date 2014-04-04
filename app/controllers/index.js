/**
 * index.js
 */
'use strict';

exports.render = function(req, res) {

	res.render('index', {
		user : 'Ghazni'
	});
};
