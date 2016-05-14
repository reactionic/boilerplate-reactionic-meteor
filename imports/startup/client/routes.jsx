import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// route components
import Body from '/imports/ui/layouts/Body.jsx';
import AppContainer from '/imports/ui/containers/AppContainer.jsx';
import Login from '/imports/ui/pages/Login.jsx';
import Signup from '/imports/ui/pages/Signup.jsx';
import AuthContainer from '/imports/ui/containers/AuthContainer.jsx';
import MainContainer from '/imports/ui/containers/MainContainer.jsx';
import WelcomeContainer from '/imports/ui/containers/WelcomeContainer.jsx';
import HelloWorld from '/imports/ui/pages/HelloWorld.jsx';
import NotFound from '/imports/ui/pages/NotFound.jsx';

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace('/login');
  }
}

function requireNoAuth(nextState, replace) {
  if (Meteor.userId()) {
    replace('/');
  }
}

export default () => (
  <Router history={browserHistory}>
    <Route component={Body}>
      <Route component={AppContainer}>
        <Route component={AuthContainer} onEnter={requireNoAuth}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Route>
        <Route path="/" component={MainContainer} onEnter={requireAuth}>
          <IndexRedirect to="welcome" />
          <Route path="welcome" component={WelcomeContainer} />
          <Route path="helloworld" component={HelloWorld} />
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Route>
  </Router>
);
