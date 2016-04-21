'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IonCard = _react2.default.createClass({
  displayName: 'IonCard',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    list: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      list: false
    };
  },
  render: function render() {
    // extract props used here, pass on the rest
    var _props = this.props;
    var list = _props.list;
    var customClasses = _props.customClasses;

    var other = _objectWithoutProperties(_props, ['list', 'customClasses']);

    var classes = (0, _classnames2.default)({ 'card': true,
      'list': list }, customClasses);
    return _react2.default.createElement(
      'div',
      _extends({ className: classes }, other),
      this.props.children
    );
  }
});

exports.default = IonCard;