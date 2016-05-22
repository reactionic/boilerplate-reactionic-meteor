import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import * as UserPubs from '/imports/api/users/publications.js';
import Main from '../layouts/Main.jsx';

export default createContainer(() => {
  const currentUserHandle = UserPubs.currentUser.subscribe();
  return {
    isLoggedIn: !!Meteor.userId(),
    isLoading: !currentUserHandle.ready(),
  };
}, Main);
