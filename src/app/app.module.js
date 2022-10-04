import angular from 'angular';
import 'angular-animate';
import 'angular-route';
import './app.style.scss';
import loginComponent from './login/login.component';
import registerComponent from './register/register.component';
import artistDirectoryComponent from './artist-directory/artist-directory.component';
import artistComponent from './artist/artist.component';

export const moduleName = 'angularjsApp';

// create the module
const module = angular.module(moduleName, [
  'ngRoute',
  'ngAnimate',
  loginComponent,
  registerComponent,
  artistDirectoryComponent,
  artistComponent
]);

// configure the module
module.config(function ($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/artists'
  });
  $routeProvider.when('/login', {
    template: `<login></login>`
  });
  $routeProvider.when('/register', {
    template: '<register></register>'
  });
  $routeProvider.when('/artists', {
    template: '<artist-directory></artist-directory>'
  });
  $routeProvider.when('/artist/:shortname', {
    template: '<artist></artist>'
  });
  $routeProvider.otherwise({
    redirectTo: '/login'
  });
});
