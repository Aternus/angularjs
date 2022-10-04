import angular from 'angular';
import './register.style.scss';
import controller from './register.controller';
import template from './register.template.html';
import appNavbarComponent from '../common/app-navbar/app-navbar.component';
import appFooterComponent from '../common/app-footer/app-footer.component';

export const componentName = 'register';
export const componentOptions = {
  bindings: controller.bindings,
  controller,
  template
};

angular
  .module(componentName, [appNavbarComponent, appFooterComponent])
  .component(componentName, componentOptions);

export default componentName;
