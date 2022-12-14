import angular from 'angular';
import './artist.style.scss';
import controller from './artist.controller';
import template from './artist.template.html';
import appNavbarComponent from '../common/app-navbar/app-navbar.component';
import appFooterComponent from '../common/app-footer/app-footer.component';

export const componentName = 'artist';
export const componentOptions = {
  bindings: controller.bindings,
  controller,
  template
};

angular
  .module(componentName, [appNavbarComponent, appFooterComponent])
  .component(componentName, componentOptions);

export default componentName;
