import angular from 'angular';
import './components';
import './filters';

// configure the myApp module
angular.module('myApp').config(function ($routeProvider) {
  $routeProvider.when('/', {
    template: '<home></home>',
  });
});
