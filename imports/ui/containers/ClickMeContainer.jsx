import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Clicks } from '/imports/api/clicks/clicks.js';
import * as ClickPubs from '/imports/api/clicks/publications.js';
import ClickMe from '../pages/ClickMe.jsx';

export default createContainer(() => {
  const handle = ClickPubs.currentUser.subscribe();
  const clicksDoc = Clicks.findOne({
    userId: Meteor.userId(),
  });
  const docExists = !!clicksDoc;
  return {
    isLoading: !handle.ready(),
    clicks: docExists ? clicksDoc.clicks : 0,
  };
}, ClickMe);
