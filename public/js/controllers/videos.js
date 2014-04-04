/**
 * videos.js
 */
'use strict';

angular.module('videostore.videos').controller('VideoController', ['$scope', '$routeParams', '$location', '$sce', 'Global', 'Videos', function ($scope, $routeParams, $location, $sce, Global, Videos) {

	$scope.global = Global;
	
	$scope.trustLink = function(link) {
		$sce.trustAsResourceUrl(link);
	};

	$scope.find = function(query) {

		Videos.query(query, function(videos) {
			$scope.videos = videos;
		});
	};
}]);