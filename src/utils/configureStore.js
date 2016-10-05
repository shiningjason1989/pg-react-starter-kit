import { createStore, combineReducers } from 'redux';

import * as reducers from '../reducers';

export default (preloadedState) => {
  const rootReducer = combineReducers(reducers);
  return createStore(rootReducer, preloadedState);
};
