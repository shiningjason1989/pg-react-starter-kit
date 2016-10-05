import Types from '../constants/ActionTypes';

export const addItem = () => ({
  type: Types.ADD_ITEM
});

export const deleteItem = (id) => ({
  type: Types.DELETE_ITEM,
  payload: id
});
