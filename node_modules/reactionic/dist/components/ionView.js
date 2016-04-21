'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonView = _react2.default.createClass({
  displayName: 'IonView',

  propTypes: {
    customClasses: _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionSetTransitionDirection: _react2.default.PropTypes.func
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.context.ionSetTransitionDirection) {
      this.context.ionSetTransitionDirection('forward');
    }
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'view': true,
      'nav-view-stage': true }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});

exports.default = IonView;