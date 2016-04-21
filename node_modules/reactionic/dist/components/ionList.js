'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonList = _react2.default.createClass({
  displayName: 'IonList',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    inset: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      inset: false
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'list': true,
      'list-inset': this.props.inset }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});

exports.default = IonList;

// TODO: Implement sortable / swipe functionality