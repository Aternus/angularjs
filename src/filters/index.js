import angular from 'angular';
import {moduleName} from '../app/app.module';
import capitalize from './capitalize';

const filters = [capitalize];

for (const filter of filters) {
  angular.module(moduleName).filter(filter.name, filter.fn);
}
