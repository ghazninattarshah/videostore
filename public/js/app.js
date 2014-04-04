/**
 * app.js
 */
'use strict';

angular.module('videostore', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ui.route',
    'videostore.system',
    'videostore.videos'
]);

angular.module('videostore.system', []);
angular.module('videostore.videos', []);