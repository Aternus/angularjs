import angular from 'angular';
import './app-footer.style.scss';
import controller from './app-footer.controller';
import template from './app-footer.template.html';

export const componentName = 'appFooter';
export const componentOptions = {
  bindings: controller.bindings,
  controller,
  template
};

angular.module(componentName, []).component(componentName, componentOptions);

export default componentName;
