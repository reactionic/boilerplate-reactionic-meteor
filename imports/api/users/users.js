import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// NOTE: Schema mostly copied from here:
// https://github.com/aldeed/meteor-collection2#attach-a-schema-to-meteorusers
// But don't follow the above example when it comes to profile information.
// See below.
Meteor.users.schema = new SimpleSchema({
  username: {
    type: String,
    optional: true,
  },
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  // NOTE: profile-ish stuff goes down here.  DO NOT USE PROFILE FIELD
  // See http://guide.meteor.com/accounts.html#dont-use-profile
  firstName: {
    type: String,
  },
});

Meteor.users.attachSchema(Meteor.users.schema);

// Deny all client-side updates to user documents.  Protects against people
// writing to profile. http://guide.meteor.com/accounts.html#dont-use-profile
Meteor.users.deny({
  update() { return true; },
});

Meteor.users.currentUserFields = {
  username: 1,
  firstName: 1,
};

// Add some user helpers here
// Meteor.users.helpers({
// });
