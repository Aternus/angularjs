import controller from './artist.controller';
import './artist.style.scss';
import template from './artist.template.html';

export const name = 'artist';
export const options = {
  bindings: controller.bindings,
  controller,
  template,
};

export default { name, options };
