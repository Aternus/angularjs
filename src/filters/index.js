import angular from 'angular';
import capitalize from './capitalize';

const filters = [capitalize];

for (const filter of filters) {
  angular.module('myApp').filter(filter.name, filter.fn);
}
