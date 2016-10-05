import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import configureRoutes from './utils/configureRoutes';

ReactDOM.render(
  <Router routes={configureRoutes()} history={browserHistory} />,
  document.getElementById('app')
);
