import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import Layout from '../../ui/layouts/Layout.jsx';
import HelloWorld from '../../ui/pages/HelloWorld.jsx';
import Foobar from '../../ui/pages/Foobar.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
      <Route component={AppContainer}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HelloWorld} />
          <Route path="foobar" component={Foobar} />
        </Route>
      </Route>
    </Router>
);
