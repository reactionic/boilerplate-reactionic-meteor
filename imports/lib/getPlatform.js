/* global cordova */
import { Meteor } from 'meteor/meteor';

// copied from https://github.com/reactionic/reactionic-kitchensink/blob/master/app/client/imports/components/utils/helpers.jsx
// and then cleaned up because this will only be used within Meteor.

export default function getPlatform(platformOverride) {
  const isCordova = Meteor.isCordova;
  const iOS = {
    isIOS: true,
    isAndroid: false,
    isCordova,
    transitionTimeOut: 450,
    name: 'iOS',
  };
  const android = {
    isIOS: false,
    isAndroid: true,
    isCordova,
    transitionTimeOut: 320,
    name: 'Android',
  };

  if (platformOverride === 'iOS') { return iOS; }

  if (typeof cordova !== 'undefined' && cordova.platformId === 'ios') { return iOS; }

  if (!!navigator.userAgent.match(/iPad/i)
     || !!navigator.userAgent.match(/iPhone/i)
     || !!navigator.userAgent.match(/iPod/i)
    ) {
    return iOS;
  }

  if (platformOverride === 'Android') { return android; }

  if (typeof cordova !== 'undefined' && cordova.platformId === 'android') { return android; }

  if (navigator.userAgent.indexOf('Android') > 0) { return android; }

  return {
    isIOS: false,
    isAndroid: false,
    isCordova,
    transitionTimeOut: 450,
    name: 'Web',
  };
}
