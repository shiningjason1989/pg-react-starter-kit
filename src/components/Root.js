import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureRoutes from '../utils/configureRoutes';

const routes = configureRoutes();

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router history={store.history} routes={routes} />
    </Provider>
  );
}
