function capitalize() {
  return function (input) {
    if (typeof input !== 'string') {
      return input;
    }
    const capitalizedFirstLetter = input.charAt(0).toLocaleUpperCase();
    return `${capitalizedFirstLetter}${input.slice(1)}`;
  };
}

export default capitalize;
