import Types from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return [...state, (state.length ? state[state.length - 1] : 0) + 1];
    case Types.DELETE_ITEM:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};
