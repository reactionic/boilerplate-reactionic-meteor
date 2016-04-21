'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonBackdrop = _react2.default.createClass({
  displayName: 'IonBackdrop',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    show: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      show: false
    };
  },
  render: function render() {
    var backdrop;
    if (this.props.show) {
      backdrop = _react2.default.createElement('div', { className: 'backdrop visible active' });
    } else {
      backdrop = false;
    }
    var classes = (0, _classnames2.default)({ 'backdrop': true }, this.props.customClasses);
    return _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        transitionEnterTimeout: 100,
        transitionLeave: false,
        transitionName: {
          enter: 'backdrop-invisible',
          enterActive: 'backdrop-visible'
        }
      },
      backdrop
    );
  }
});

exports.default = IonBackdrop;