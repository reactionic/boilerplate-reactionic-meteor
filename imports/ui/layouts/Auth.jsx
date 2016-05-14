import React from 'react';
import { IonNavView, IonView, IonNavBar } from 'reactionic';

const Auth = (props) => (
  <div>
    <IonNavBar
      customClasses="bar-dark"
      title="React-Ionic Meteor Boilerplate"
      {...props}
    />
    <IonNavView customClasses="" {...props}>
      <IonView customClasses="" {...props}>
        {props.children}
      </IonView>
    </IonNavView>
  </div>
);

Auth.propTypes = {
  children: React.PropTypes.element,
};

export default Auth;
