'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonIcon = _react2.default.createClass({
  displayName: 'IonIcon',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.string.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: ''
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'icon': true }, 'ion-' + this.props.icon, this.props.customClasses);
    return _react2.default.createElement('i', { className: classes });
  }
});

exports.default = IonIcon;