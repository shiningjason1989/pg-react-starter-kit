import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import configureStore from './utils/configureStore';
import configureRoutes from './utils/configureRoutes';

const store = configureStore();
const routes = configureRoutes();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={store.history} />
  </Provider>,
  document.getElementById('app')
);
