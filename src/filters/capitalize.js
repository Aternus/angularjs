import {capitalize, isString} from 'lodash';

function capitalizeFilter() {
  return function (input) {
    if (!isString(input)) {
      return input;
    }
    return capitalize(input);
  };
}

export default {
  name: 'capitalize',
  fn: capitalizeFilter
};
