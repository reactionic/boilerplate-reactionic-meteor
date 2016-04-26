import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import Layout from '../../ui/layouts/Layout.jsx';
import HelloWorld from '../../ui/pages/HelloWorld.jsx';
import Foobar from '../../ui/pages/Foobar.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route component={AppContainer}>
      <Route path="/" component={Layout}>
        <Route path="helloworld" component={HelloWorld} />
        <Route path="foobar" component={Foobar} />
        <Route path="*" component={NotFound} />
      </Route>
    </Route>
  </Router>
);
