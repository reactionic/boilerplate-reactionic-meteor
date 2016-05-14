import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from './routes.jsx';
// NOTE: becuase the users collection is accessed through the Meteor object
// this file is never imported anywhere.  So it must be imported here.
import '/imports/api/users/users.js';
import '/imports/ui/stylesheets';

Meteor.startup(() => {
  render(routes(), document.getElementById('app'));
});
