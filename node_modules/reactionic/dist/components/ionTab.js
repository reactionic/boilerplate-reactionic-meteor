'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonTab = _react2.default.createClass({
  displayName: 'IonTab',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    active: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.string,
    to: _react2.default.PropTypes.string.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      active: false,
      label: null,
      icon: null,
      to: null
    };
  },
  render: function render() {
    var icon = this.props.icon ? _react2.default.createElement(
      'i',
      { className: 'icon ion-' + this.props.icon },
      this.props.children
    ) : null;
    var classes = (0, _classnames2.default)({ 'tab-item': true,
      'active': this.props.active }, this.props.customClasses);
    return _react2.default.createElement(
      _reactRouter.Link,
      { to: this.props.to, className: classes, activeClassName: 'active' },
      icon,
      this.props.label
    );
  }
});

exports.default = IonTab;