"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// See https://facebook.github.io/react/docs/reusable-components.html for reasoning

var SetTimeoutMixin = {
  componentWillMount: function componentWillMount() {
    this.timeouts = [];
  },
  setTimeout: function (_setTimeout) {
    function setTimeout() {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function () {
    this.timeouts.push(setTimeout.apply(null, arguments));
  }),

  clearTimeouts: function clearTimeouts() {
    this.timeouts.forEach(clearTimeout);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.clearTimeouts();
  }
};

exports.default = SetTimeoutMixin;