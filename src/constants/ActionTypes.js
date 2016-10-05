function constants(...args) {
  return args.reduce((obj, i) => {
    obj[i] = i;
    return obj;
  }, {})
}

export default constants(
  'ADD_ITEM',
  'DELETE_ITEM'
);
