/**
 * videos.js
 */
'use strict';

angular.module('videostore.videos').factory('Videos', ['$resource', function($resource) {
	return $resource('videos');
}]); 
