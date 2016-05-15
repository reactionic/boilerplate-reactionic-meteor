import React from 'react';
import { IonSpinner } from 'reactionic';
import AbsoluteMiddle from './AbsoluteMiddle.jsx';

const Spinner = () => (
  <AbsoluteMiddle>
    <IonSpinner icon="spiral" />
  </AbsoluteMiddle>
);

const LoadingDiv = (props) => (
  // TODO: potentially add some fade in animation so there isn't such a harsh
  // jump from spinner to children
  props.isLoading
    ? <Spinner />
    : <div className="stretch">{props.children}</div>
);

LoadingDiv.propTypes = {
  children: React.PropTypes.node,
  isLoading: React.PropTypes.bool,
};

LoadingDiv.defaultProps = {
  isLoading: false,
};

export default LoadingDiv;
