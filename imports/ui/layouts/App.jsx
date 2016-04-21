import React from 'react';
import { IonBody } from 'reactionic';
import { getPlatform } from '../utils/helpers.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platformOverride: props.location.query.platformOverride,
    };
  }

  componentWillReceiveProps(newProps) {
    const newPlatformOverride = newProps.location.query.platformOverride;
    if (newPlatformOverride) {
      if (newPlatformOverride !== this.state.platformOverride) {
        this.setState({ platformOverride: newPlatformOverride });
      }
    }
  }

  render() {
    const platform = getPlatform(this.state.platformOverride);

    return (
      <IonBody platform={platform} >
        {this.props.children}
      </IonBody>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  children: React.PropTypes.element, // matched child route component
  location: React.PropTypes.object,  // current router location
  params: React.PropTypes.object,    // parameters of the current route
};

App.contextTypes = {
  router: React.PropTypes.object,
};
