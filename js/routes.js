'use strict';

var GAngular = angular.module('GAngular', []);

GAngular.config(function($routeProvider) {
    $routeProvider.when(
    	'/game', 
    	{
    		templateUrl: 'partials/game.html', 
    		controller: 'GameController'
    	})
        .otherwise(
        {
            redirectTo: '/game'
        });
});
