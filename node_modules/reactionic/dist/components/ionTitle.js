'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonTitle = _react2.default.createClass({
  displayName: 'IonTitle',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    marginCompensation: _react2.default.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      marginCompensation: 0
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'title': true }, this.props.customClasses, { 'title-left': this.props.marginCompensation > 0 });
    var styles = this.props.marginCompensation ? { "marginLeft": this.props.marginCompensation } : {};
    return _react2.default.createElement(
      'h1',
      { className: classes, style: styles },
      this.props.children
    );
  }
});

exports.default = IonTitle;