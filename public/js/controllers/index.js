/**
 * index.js
 */
'use strict';

angular.module('videostore.system').controller('IndexController', ['$scope', 'Global', function($scope, Global) {
	$scope.global = Global;
}]);
