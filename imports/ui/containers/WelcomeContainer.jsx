import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Welcome from '../pages/Welcome.jsx';

export default createContainer(() => (
  // no need to subscribe here as it happens in MainContainer
  {
    user: Meteor.user(),
  }
), Welcome);
