import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './utils/configureStore';
import configureRoutes from './utils/configureRoutes';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router routes={configureRoutes()} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
