'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonListButton = _react2.default.createClass({
  displayName: 'IonListButton',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    action: _react2.default.PropTypes.string,
    side: _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      action: 'delete',
      side: 'left'
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'enable-pointer-events': true }, 'item-' + this.props.action, 'item-' + this.props.side + '-edit', this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});

exports.default = IonListButton;