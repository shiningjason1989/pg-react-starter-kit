import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose
} from 'redux';
import { browserHistory } from 'react-router';
import {
  routerReducer,
  routerMiddleware,
  syncHistoryWithStore
} from 'react-router-redux';

import * as reducers from '../reducers';

export default (preloadedState) => {
  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  const enhancer = applyMiddleware(routerMiddleware(browserHistory));

  const store = createStore(rootReducer, preloadedState, enhancer);
  store.history = syncHistoryWithStore(browserHistory, store);

  return store;
};
