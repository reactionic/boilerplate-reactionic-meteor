import React from 'react';
import { IonSpinner } from 'reactionic';

// these loading timeout ideas were taken from
// https://github.com/meteor/todos/blob/react/imports/ui/layouts/App.jsx
const CONNECTION_ISSUE_TIMEOUT = 5000;

const noConnectionOverlay = (
  <div>
    <IonSpinner icon="spiral" customClasses="inloader spinner-light" />
    <h2>TRYING TO CONNECT</h2>
    <p>Please wait...</p>
  </div>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConnectionIssue: false,
    };
    this.popupError = this.popupError.bind(this);
  }

  getChildContext() {
    return {
      popupError: this.popupError,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ showConnectionIssue: true });
    }, CONNECTION_ISSUE_TIMEOUT);
  }

  componentWillReceiveProps(newProps) {
    this.context.ionShowLoading(
      this.state.showConnectionIssue && !newProps.isConnected,
      {
        backdrop: true,
        customTemplate: noConnectionOverlay,
      }
    );
  }

  popupError(errorMessage, errorObj = undefined) {
    // TODO: figure out a way to only console.log this stuff when we are in
    // development.  React accomplishes this somehow for proptypes validation
    console.log(`Error: ${errorMessage} (object=${errorObj})`); // eslint-disable-line no-console
    console.log(errorObj); // eslint-disable-line no-console
    this.context.ionUpdatePopup({
      popupType: 'alert',
      title: 'Error',
      template: errorMessage,
      okText: 'OK',
    });
  }

  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: React.PropTypes.element,
  isConnected: React.PropTypes.bool,
};

App.contextTypes = {
  ionUpdatePopup: React.PropTypes.func,
  ionShowLoading: React.PropTypes.func,
};

App.childContextTypes = {
  popupError: React.PropTypes.func,
};
