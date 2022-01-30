import angular from 'angular';
import controller from './artistDirectory.controller';
import './artistDirectory.style.scss';
import template from './artistDirectory.template.html';

const componentName = 'artistDirectory';

angular.module('myApp').component(componentName, {
  bindings: controller.bindings,
  controller,
  template,
});

export default componentName;
