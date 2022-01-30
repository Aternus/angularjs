import angular from 'angular';
import 'angular-animate';
import 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';

import artists from '../data/artists.json';
import './style.css';

// create myApp module
const myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.artist = artists[0];
});
