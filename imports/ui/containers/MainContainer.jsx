import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Main from '../layouts/Main.jsx';

export default createContainer(() => {
  const thisUserHandle = Meteor.subscribe('users.this');
  return {
    isLoggedIn: !!Meteor.userId(),
    isLoading: !thisUserHandle.ready(),
  };
}, Main);
