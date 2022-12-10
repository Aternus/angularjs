import angular from 'angular';
import './login.style.scss';
import LoginController from './login.controller';
import template from './login.template.html';
import appNavbarComponent from '../common/app-navbar/app-navbar.component';
import appFooterComponent from '../common/app-footer/app-footer.component';

export const componentName = 'login';
export const componentOptions = {
  bindings: LoginController.bindings,
  controller: LoginController,
  template
};

angular
  .module(componentName, [appNavbarComponent, appFooterComponent])
  .component(componentName, componentOptions);

export default componentName;
