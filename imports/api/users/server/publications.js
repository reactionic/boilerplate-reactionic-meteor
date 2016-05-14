import { Meteor } from 'meteor/meteor';
import '../users.js';

Meteor.publish('users.this', function users() {
  return Meteor.users.find({
    _id: this.userId,
  }, {
    fields: Meteor.users.thisUserFields,
  });
});
