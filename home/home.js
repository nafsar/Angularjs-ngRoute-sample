'use strict';

var apphome = angular.module('myApp.home', ['ngRoute']);

apphome.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}]);

apphome.controller('HomeCtrl', function($location) {
 
     /* 
        this.isActive = function (viewLocation) {	
        return viewLocation === $location.path();
    };
    */  
});

