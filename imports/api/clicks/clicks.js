import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ClicksCollection extends Mongo.Collection {
}

export const Clicks = new ClicksCollection('Clicks');

Clicks.schema = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    unique: true,
  },
  clicks: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
});

Clicks.attachSchema(Clicks.schema);

// Deny all database usage from client.  This forces any other code that might
// try to allow to do nothing.
Clicks.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Clicks.currentUserFields = {
  userId: 1,
  clicks: 1,
};

// Add some helpers here
// Clicks.helpers({
// });
