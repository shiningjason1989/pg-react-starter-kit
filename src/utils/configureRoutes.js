import React from 'react';
import {
  IndexRoute,
  Route,
  Redirect
} from 'react-router';

import App from '../components/App';
import HomePage from '../components/pages/HomePage';
import ListPage from '../components/pages/ListPage';
import DetailPage from '../components/pages/DetailPage';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="list" component={ListPage} />
      <Route path="detail/:id" component={DetailPage} />
      <Redirect from="*" to="/" />
    </Route>
  );
};
