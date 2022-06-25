import controller from './artist-directory.controller';
import './artist-directory.style.scss';
import template from './artist-directory.template.html';

export const name = 'artistDirectory';
export const options = {
  bindings: controller.bindings,
  controller,
  template
};

export default {name, options};
