import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Auth from '/imports/ui/layouts/Auth.jsx';

export default createContainer(() => (
  {
    isLoggedIn: !!Meteor.userId(),
  }
), Auth);
