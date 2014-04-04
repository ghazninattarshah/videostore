/**
 * route.js
 */

'use strict';

angular.module('videostore').config(['$routeProvider', 

    function($routeProvider) {

		$routeProvider.
		when('/', {
			templateUrl: 'views/index.html'
		}).
		when('/videos', {
			templateUrl: 'views/videos/list.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);

//setting html5 location mode
angular.module('videostore').config(['$locationProvider',
    function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);