import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

export default createContainer({
  getMeteorData: () => (
    {
      isConnected: Meteor.status().connected,
    }
  ),
  pure: false,
}, App);
