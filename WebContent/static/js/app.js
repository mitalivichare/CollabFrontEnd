'use strict';
 
var App = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	
	.when('/', {
		templateUrl : 'WEB-INF/views/UserManagement.html',
		controller : 'UserController'
			
	})
	
	.when('/blog', {
		templateUrl : 'WEB-INF/views/BlogManagement.html',
		controller : 'BlogController'
			
	})
	
	.when('/forum', {
		templateUrl : 'WEB-INF/views/ForumManagement.html',
		controller : 'ForumController'
			
	})
	
	.otherwise({redirectTo: '/'});
	
});