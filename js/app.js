'use strict';

var app = angular.module('RachelsApp', [
    'ngRoute',
    'appControllers'
]);

app.config(['$routeProvider', 
    function ($routeProvider) {
        $routeProvider.
        when('/tech', {
            templateUrl: 'views/bloglist.html' 
        }).
        when('/tech/computerscience', {
            templateUrl: 'views/courses/computerScience.html' 
        }).
        when('/tech/courses/objectorientedprogramming', {
            templateUrl: 'views/courses/objectOrientedProgramming.html' 
        }).
        when('/tech/osx/keyboardshortcuts', {
            templateUrl: 'views/osx/keyboardShortcuts.html'
        }).
        when('/tech/android/dialogbug', {
            templateUrl: 'views/android/dialogBug.html'
        }).
        when('/tech/osx/filepermissions', {
            templateUrl: 'views/osx/filePermissions.html'
        }).
        when('/tech/python/jsonschemasanitizer', {
            templateUrl: 'views/python/jsonSchemaSanitizer.html'
        }).
        otherwise({
            redirectTo: '/tech' 
        });
    } ]
);