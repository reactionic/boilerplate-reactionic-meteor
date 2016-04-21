import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import Layout from '../../ui/layouts/Layout.jsx';
import Main from '../../ui/pages/Main.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route component={Layout}>
          <IndexRoute component={Main} />
        </Route>
      </Route>
    </Router>
);
