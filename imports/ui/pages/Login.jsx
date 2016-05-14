import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { IonList, IonItem } from 'reactionic';
import Content from '/imports/ui/components/Content.jsx';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        this.context.popupError('Invalid Username and/or Password. Please try again.', error);
        return;
      }

      this.context.router.push('/');
    });
  }

  render() {
    return (
      <Content {...this.props}>
        <form onSubmit={this.handleSubmit}>
          <IonList inset>
            <IonItem input>
              <input ref="username" type="text" placeholder="Username" />
            </IonItem>
            <IonItem input>
              <input ref="password" type="password" placeholder="Password" />
            </IonItem>
          </IonList>
          {/* TODO: change this to IonButton once buttonType property is supported */}
          <button type="submit" className="button button-full button-calm">Login</button>
        </form>
        <Link to="/signup">Need an account? Join Now</Link>
      </Content>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object,
  popupError: React.PropTypes.func,
};
