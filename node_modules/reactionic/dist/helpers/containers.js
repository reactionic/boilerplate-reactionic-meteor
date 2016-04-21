'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftButtonContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _timeout = require('./timeout.js');

var _timeout2 = _interopRequireDefault(_timeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftButtonContainer = _react2.default.createClass({
  displayName: 'LeftButtonContainer',

  propTypes: {
    setMarginCompensation: _react2.default.PropTypes.func.isRequired
  },
  mixins: [_timeout2.default],
  componentDidMount: function componentDidMount() {
    var node = _reactDom2.default.findDOMNode(this);
    var self = this;
    this.setTimeout(function () {
      var width;
      if (node) {
        width = node.getBoundingClientRect().width;
      } else {
        width = 0;
      }
      self.props.setMarginCompensation(width);
    }, 10);
  },
  render: function render() {
    return this.props.children;
  }
});

exports.LeftButtonContainer = LeftButtonContainer;