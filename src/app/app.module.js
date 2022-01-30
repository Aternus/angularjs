import angular from 'angular';
import 'angular-animate';
import 'angular-route';
import './app.style.scss';
import artistModule from './artist/artist.module';
import homeModule from './home/home.module';

const moduleName = 'app';

// create the module
const module = angular.module(moduleName, [
  'ngRoute',
  'ngAnimate',
  homeModule,
  artistModule,
]);

// configure the module
module.config(function ($routeProvider) {
  $routeProvider.when('/', {
    template: '<home></home>',
  });
  $routeProvider.when('/artist/:shortname', {
    template: '<artist></artist>',
  });
});

export default moduleName;
