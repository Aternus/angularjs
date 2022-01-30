import angular from 'angular';
import 'angular-animate';
import 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';
import capitalize from './filters/capitalize';

import './style.css';

// create myApp module
const myApp = angular.module('myApp', []);

const EArtistOrder = {
  NAME: 'name',
  REKNOWN: 'reknown',
};

myApp
  .controller('MyController', function MyController($scope, $http) {
    $http.get('/data/artists.json').then(function (response) {
      $scope.artists = response.data;
    });

    $scope.artistOrderEnum = EArtistOrder;
    $scope.artistOrder = EArtistOrder.NAME; // set default order
  })
  .filter('capitalize', capitalize);
