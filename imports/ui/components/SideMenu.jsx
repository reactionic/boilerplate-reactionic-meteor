import { Meteor } from 'meteor/meteor';
import React from 'react';
import { IonSideMenu, IonList, IonItem } from 'reactionic';

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logout() {
    Meteor.logout((error) => {
      if (error) {
        this.context.popupError('Could not log out. Please try again.', error);
        return;
      }
      this.context.router.push('/login');
    });
  }

  handleClick() {
    // default is not being prevented so that this will close side menu
    // as well as navigate to the new link.
    this.context.ionGetSnapper().toggle('left');
  }

  render() {
    return (
      // NOTE: you can't use reactionic's IonContent, IonNavBar, IonSubheaderBar,
      // IonFooterBar, IonSubfooterBar  in here.  reactionic's versions of those
      // are only usable once.  Multiples will give undersired results.  So
      // it is only used for the main content on each page of the app and not
      // the side menu.
      // This means that you have manually add <div>s with the right Ionic
      // classes to get the desired effect.  Luckily, you have some great
      // examples in reactionic's source.  Or see
      // http://ionicframework.com/docs/components/ for good info on what html
      // classes are apart of Ionic.
      <IonSideMenu>
        <div className="bar bar-header bar-light">
          <h1 className="title">Menu</h1>
        </div>
        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              <IonList>
                <IonItem
                  link="/welcome"
                  onClick={this.handleClick}
                >Welcome</IonItem>
                <IonItem
                  link="/helloworld"
                  onClick={this.handleClick}
                >Hello World</IonItem>
                <IonItem
                  customClasses="item-assertive"
                  onClick={this.logout}
                >Logout</IonItem>
              </IonList>
            </div>
          </div>
        </div>
      </IonSideMenu>
    );
  }
}

SideMenu.contextTypes = {
  router: React.PropTypes.object,
  ionGetSnapper: React.PropTypes.func,
  popupError: React.PropTypes.func,
};
