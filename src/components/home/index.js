import angular from 'angular';
import controller from './home.controller';
import './home.style.scss';
import template from './home.template.html';

const componentName = 'home';

angular.module('myApp').component(componentName, {
  bindings: controller.bindings,
  controller,
  template,
});

export default componentName;
