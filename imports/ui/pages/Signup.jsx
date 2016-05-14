import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Link } from 'react-router';
import { IonList, IonItem, IonButton } from 'reactionic';
import Content from '/imports/ui/components/Content.jsx';

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();
    const confirm = this.refs.confirm.value.trim();
    const firstName = this.refs.firstName.value.trim();

    if (password !== confirm) {
      this.context.popupError("Passwords don't match");
      return;
    }

    Accounts.createUser({
      username,
      password,
      firstName,
    }, error => {
      if (error) {
        this.context.popupError(error.reason, error);
        return;
      }

      this.context.router.push('/');
    });
  }

  render() {
    return (
      <Content {...this.props}>
        <form>
          <IonList inset>
            <IonItem input>
              <input ref="username" type="text" placeholder="Pick A Username" />
            </IonItem>
            <IonItem input>
              <input ref="firstName" type="text" placeholder="First Name" />
            </IonItem>
            <IonItem input>
              <input ref="password" type="password" placeholder="Password" />
            </IonItem>
            <IonItem input>
              <input ref="confirm" type="password" placeholder="Confirm Password" />
            </IonItem>
          </IonList>
          <IonButton
            expand="full"
            color="calm"
            onClick={this.handleSubmit}
          >Create Account</IonButton>
        </form>
        <Link to="/login">Have an account? Sign In</Link>
      </Content>
    );
  }
}

Join.contextTypes = {
  router: React.PropTypes.object,
  popupError: React.PropTypes.func,
};
