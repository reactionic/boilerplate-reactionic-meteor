import React from 'react';
import { IonSpinner } from 'reactionic';
import AbsoluteMiddle from './AbsoluteMiddle.jsx';

const spinner = (
  <AbsoluteMiddle>
    <IonSpinner icon="spiral" />
  </AbsoluteMiddle>
);

const LoadingDiv = (props) => (
  <div>
    {/*
    TODO: potentially add some fade in animation so there isn't such a harsh
    jump from spinner to children
    */}
  {props.isLoading
      ? spinner
      : props.children}
  </div>
);

LoadingDiv.propTypes = {
  children: React.PropTypes.node,
  isLoading: React.PropTypes.bool,
};

LoadingDiv.defaultProps = {
  isLoading: false,
};

export default LoadingDiv;
