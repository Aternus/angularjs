import controller from './home.controller';
import './home.style.scss';
import template from './home.template.html';

export const name = 'home';
export const options = {
  bindings: controller.bindings,
  controller,
  template
};

export default {name, options};
