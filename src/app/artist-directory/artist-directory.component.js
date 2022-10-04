import angular from 'angular';
import './artist-directory.style.scss';
import controller from './artist-directory.controller';
import template from './artist-directory.template.html';
import appNavbarComponent from '../common/app-navbar/app-navbar.component';
import appFooterComponent from '../common/app-footer/app-footer.component';
import artistComponent from '../artist/artist.component';

export const componentName = 'artistDirectory';
export const componentOptions = {
  bindings: controller.bindings,
  controller,
  template
};

angular
  .module(componentName, [
    appNavbarComponent,
    appFooterComponent,
    artistComponent
  ])
  .component(componentName, componentOptions);

export default componentName;
