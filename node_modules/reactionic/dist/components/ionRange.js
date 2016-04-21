'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonRange = _react2.default.createClass({
  displayName: 'IonRange',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    defaultValue: _react2.default.PropTypes.number,
    handleChange: _react2.default.PropTypes.func,
    iconBeforeInput: _react2.default.PropTypes.element,
    iconAfterInput: _react2.default.PropTypes.element,
    min: _react2.default.PropTypes.number,
    max: _react2.default.PropTypes.number
  },
  contextTypes: {
    ionSnapper: _react2.default.PropTypes.object
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue > this.props.max ? this.props.max : this.props.defaultValue
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      defaultValue: 0,
      handleChange: function handleChange() {},
      iconBeforeInput: null,
      iconAfterInput: null,
      min: 0,
      max: 100
    };
  },
  handleChange: function handleChange(event) {
    if (this.props.handleChange) this.props.handleChange(event.target.value);

    this.setState({
      value: event.target.value
    });
  },
  disableSnap: function disableSnap() {
    this.context.ionSnapper.disable();
  },
  enableSnap: function enableSnap() {
    this.context.ionSnapper.enable();
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'item': true }, { 'range': true }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      this.props.iconBeforeInput,
      _react2.default.createElement('input', { type: 'range', min: this.props.min, max: this.props.max,
        value: this.state.value,
        onChange: this.handleChange,
        onMouseEnter: this.disableSnap,
        onMouseLeave: this.enableSnap,
        onTouchStart: this.disableSnap,
        onTouchEnd: this.enableSnap }),
      this.props.iconAfterInput,
      this.props.children
    );
  }
});

exports.default = IonRange;