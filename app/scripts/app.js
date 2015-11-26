'use strict';

/**
 * @ngdoc overview
 * @name contactManagerApp
 * @description
 * # contactManagerApp
 *
 * Main module of the application.
 */

var app = angular
  .module('contactManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/contacts.html',
        controller: 'indexctrl'
      })
      .when('/add', {
        templateUrl: 'views/edit.html',
        controller: 'edit'
      })
    .when('/editcontact/:id', {
        templateUrl: 'views/edit.html',
        controller: 'edit'
      })
    .when('/delete/:id', {
        templateUrl: 'views/contacts.html',
        controller: 'indexctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

