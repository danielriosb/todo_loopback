'use strict';
 
angular
 .module('app', [
   'lbServices',
   'ui.router'
 ])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
     $urlRouterProvider) {
   $stateProvider
     .state('todos', {
       url: '',
       templateUrl: 'js/todo/templates/todo.html',
       controller: 'TodoCtrl'
     });
   $urlRouterProvider.otherwise('todo');
 }]);