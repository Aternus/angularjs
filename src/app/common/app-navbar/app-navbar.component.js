import angular from 'angular';
import './app-navbar.style.scss';
import controller from './app-navbar.controller';
import template from './app-navbar.template.html';

export const componentName = 'appNavbar';
export const componentOptions = {
  bindings: controller.bindings,
  controller,
  template
};

angular.module(componentName, []).component(componentName, componentOptions);

export default componentName;
