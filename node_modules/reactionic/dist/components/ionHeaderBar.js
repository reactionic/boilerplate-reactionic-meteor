'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ionTitle = require('./ionTitle');

var _ionTitle2 = _interopRequireDefault(_ionTitle);

var _containers = require('../helpers/containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonHeaderBar = _react2.default.createClass({
  displayName: 'IonHeaderBar',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    leftButton: _react2.default.PropTypes.element,
    rightButton: _react2.default.PropTypes.element
  },
  getDefaultProps: function getDefaultProps() {
    // no need to set default platform; is propogated from IonBody
    return {
      customClasses: '',
      title: '',
      leftButton: null,
      rightButton: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      marginCompensation: 0
    };
  },

  contextTypes: {
    ionUpdateHasX: _react2.default.PropTypes.func,
    ionPlatform: _react2.default.PropTypes.object
  },
  setMarginCompensation: function setMarginCompensation(width) {
    if (this.context.ionPlatform.isAndroid) {
      this.setState({ 'marginCompensation': Math.ceil(width) + 10 });
    }
  },
  componentWillMount: function componentWillMount() {
    this.context.ionUpdateHasX('ionHasHeader', true);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.context.ionUpdateHasX('ionHasHeader', false);
  },
  render: function render() {
    var platform = this.context.ionPlatform;
    var leftButton = this.props.leftButton;
    if (leftButton && platform.isAndroid) {
      // Add a reference to leftButton so we can find it when componentDidMount
      leftButton = _react2.default.cloneElement(leftButton, { ref: 'leftButton' });
    }

    var classes = (0, _classnames2.default)({ 'bar': true, 'bar-header': true }, this.props.customClasses || 'bar-stable' // default class
    );
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement(
        _containers.LeftButtonContainer,
        { setMarginCompensation: this.setMarginCompensation },
        leftButton
      ),
      _react2.default.createElement(
        _ionTitle2.default,
        { marginCompensation: this.state.marginCompensation },
        this.props.title
      ),
      this.props.rightButton
    );
  }
});

exports.default = IonHeaderBar;