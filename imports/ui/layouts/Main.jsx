import React from 'react';
import { IonNavView, IonView, IonNavBar, IonSideMenuContainer,
  IonSideMenus, IonSideMenuContent } from 'reactionic';
import SideMenu from '../components/SideMenu.jsx';
import NavMenuButton from '../components/NavMenuButton.jsx';
import Content from '../components/Content.jsx';

export default class Main extends React.Component {
  componentWillReceiveProps(newProps) {
    // NOTE: this redirect is intentional.  react-router's onEnter route hook
    // is only called when entering the route for the first (ie. if you switch
    // routes to a sibling that is also a sub-route to the parent that has the
    // onEnter then onEnter doesn't get called again).
    // So there is an odd corner case where a user could get logged out behind
    // the scenes (eg. login token expires) and then the user could click
    // a page that is restrcited and be allowed to go there because react-router
    // doesn't double check access.  Below double checks access.
    if (!newProps.isLoggedIn) {
      this.context.router.push('/');
    }
  }

  render() {
    const leftButton = <NavMenuButton />;
    return (
      <IonSideMenuContainer
        settings={{
          disable: 'right',
          hyperextensible: false,
        }}
        {...this.props}
      >
        <IonSideMenus>
          <SideMenu />
        </IonSideMenus>
        <IonSideMenuContent>
          <IonNavBar
            customClasses="bar-dark"
            title="React-Ionic Meteor Boilerplate"
            leftButton={leftButton}
            {...this.props}
          />

          <IonNavView customClasses="" {...this.props}>
            <IonView customClasses="" {...this.props}>
              {this.props.isLoading
                ? <Content isLoading />
                : this.props.children}
            </IonView>
          </IonNavView>
        </IonSideMenuContent>
      </IonSideMenuContainer>
    );
  }
}

Main.propTypes = {
  isLoading: React.PropTypes.bool,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
