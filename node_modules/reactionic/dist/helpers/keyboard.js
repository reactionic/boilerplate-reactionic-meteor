"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// IonKeyboard relies on https://github.com/driftyco/ionic-plugin-keyboard
// and only works within platform.isCordova

var IonKeyboard = function IonKeyboard(platform) {

  return {
    close: function close() {
      if (platform.isCordova && window.cordova) {
        window.cordova.plugins.Keyboard.close();
      }
    },

    show: function show() {
      if (platform.isCordova && window.cordova) {
        window.cordova.plugins.Keyboard.show();
      }
    },

    hideKeyboardAccessoryBar: function hideKeyboardAccessoryBar() {
      if (platform.isCordova && window.cordova) {
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
    },

    showKeyboardAccessoryBar: function showKeyboardAccessoryBar() {
      if (platform.isCordova && window.cordova) {
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      }
    },

    disableScroll: function disableScroll() {
      if (platform.isCordova && window.cordova) {
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
    },

    enableScroll: function enableScroll() {
      if (platform.isCordova && window.cordova) {
        window.cordova.plugins.Keyboard.disableScroll(false);
      }
    }
  };
};

// window.addEventListener('native.keyboardshow', function (event) {
// To be implemented @@@@@@@@@@@@@@@@
// });

exports.default = IonKeyboard;