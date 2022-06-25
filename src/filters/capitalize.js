import {capitalize} from 'lodash';

function capitalizeFilter() {
  return function (input) {
    if (typeof input !== 'string') {
      return input;
    }
    return capitalize(input);
  };
}

export default {
  name: 'capitalize',
  fn: capitalizeFilter
};
