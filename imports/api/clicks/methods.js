import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Clicks } from './clicks.js';

export const increment = new ValidatedMethod({
  name: 'clicks.increment',
  validate: null,
  run() {
    if (!this.userId) {
      throw new Meteor.Error('clicks.increment.notLoggedIn',
        'Must be logged in to click.');
    }

    const userClicks = Clicks.findOne({ userId: this.userId });

    let clicksId;
    if (!userClicks) {
      clicksId = Clicks.insert({ userId: this.userId });
    } else {
      clicksId = userClicks._id;
    }

    return Clicks.update(clicksId, {
      $inc: { clicks: 1 },
    });
  },
});

// Get list of all method names
const METHODS = _.map([
  increment,
], 'name');

if (Meteor.isServer) {
  // Only allow 5 operations per connection per second
  DDPRateLimiter.addRule({
    name(name) {
      return _.includes(METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 5, 1000);
}
