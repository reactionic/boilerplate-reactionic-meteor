import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.onCreateUser((options, user) => {
    const newUser = user;
    if (options.firstName) {
      newUser.firstName = options.firstName;
    }
    return newUser;
  });
});

// TODO: add reset password email templates
// TODO: how to integrate something like useraccounts meteor package in to this
