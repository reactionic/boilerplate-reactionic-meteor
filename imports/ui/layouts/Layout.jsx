import React from 'react';
import { Link } from 'react-router';
import { IonNavView, IonView, IonNavBar, IonSideMenuContainer,
  IonSideMenus, IonSideMenu, IonSideMenuContent } from 'reactionic';

const Layout = (props, context) => (
  <IonSideMenuContainer disable="right" {...props}>
    <IonSideMenus>
      <IonSideMenu customClasses="side-menu">
        <div className="bar bar-header bar-stable">
          <h1 className="title">Side Menu</h1>
        </div>
        <div className="content has-header side-menu">
          <div className="list">
            <Link
              to="/helloworld"
              className="item"
              onClick={ () => { context.ionSnapper.toggle('left'); } }
            >
            HelloWorld Page
            </Link>
            <Link
              to="/foobar"
              className="item"
              onClick={ () => { context.ionSnapper.toggle('left'); } }
            >
            Foobar Page
            </Link>
          </div>
        </div>
      </IonSideMenu>
    </IonSideMenus>
    <IonSideMenuContent>
      <IonNavBar customClasses="bar-dark"
        title="Boilerplate ReactIonic Meteor"
        {...props}
      />

      <IonNavView customClasses="" {...props}>
        <IonView customClasses="" {...props}>
          {props.children}
        </IonView>
      </IonNavView>
    </IonSideMenuContent>
  </IonSideMenuContainer>
);

Layout.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  children: React.PropTypes.element, // matched child route component
  location: React.PropTypes.object,  // current router location
  params: React.PropTypes.object,    // parameters of the current route
};

Layout.contextTypes = {
  ionSnapper: React.PropTypes.object,
  ionShowPopover: React.PropTypes.func,
  ionPlatform: React.PropTypes.object,
};

export default Layout;
