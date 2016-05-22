import ValidatedPublication from '/imports/helpers/ValidatedPublication.js';
import { Clicks } from './clicks.js';

export const currentUser = new ValidatedPublication({
  name: 'clicks.currentUser',
  validate: null,
  run() {
    return Clicks.find({
      userId: this.userId,
    }, {
      fields: Clicks.currentUserFields,
    });
  },
});
