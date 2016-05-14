import React from 'react';
import Content from '../components/Content.jsx';

const Welcome = (props) => (
  <Content {...props}>
    <h2>Welcome!</h2>
    <p>Your username is {props.user.username}</p>
    <p>Your first name is {props.user.firstName}</p>
  </Content>
);

Welcome.propTypes = {
  user: React.PropTypes.object,
};

export default Welcome;
