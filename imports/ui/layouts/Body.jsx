import React from 'react';
import { IonBody } from 'reactionic';
import getPlatform from '/imports/helpers/getPlatform.js';

export default class Body extends React.Component {
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
      <IonBody platform={platform} location={this.props.location}>
        {this.props.children}
      </IonBody>
    );
  }
}

Body.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object,
};
