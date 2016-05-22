import React from 'react';
import Content from '../components/Content.jsx';
import { IonButton } from 'reactionic';
import * as Clicks from '/imports/api/clicks/methods.js';

export default class ClickMe extends React.Component {
  handleClick() {
    Clicks.increment.call();
  }

  render() {
    return (
      <Content {...this.props}>
        <h2>Click Me and I will persist, but only for this user.</h2>
        <IonButton
          expand="full"
          color="calm"
          onClick={this.handleClick}
        >Click Me</IonButton>
        <p>I have been clicked {this.props.clicks} time{this.props.clicks !== 1 ? 's' : null}</p>
      </Content>
    );
  }
}

ClickMe.propTypes = {
  clicks: React.PropTypes.number,
};
