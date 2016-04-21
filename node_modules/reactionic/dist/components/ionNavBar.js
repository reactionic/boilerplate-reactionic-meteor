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

var _animate = require('../helpers/animate');

var _animate2 = _interopRequireDefault(_animate);

var _containers = require('../helpers/containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonNavBar = _react2.default.createClass({
  displayName: 'IonNavBar',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    leftButton: _react2.default.PropTypes.element,
    leftButtonColor: _react2.default.PropTypes.string,
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
    ionPlatform: _react2.default.PropTypes.object,
    ionUpdateHasX: _react2.default.PropTypes.func,
    ionSetTransitionDirection: _react2.default.PropTypes.func,
    ionNavDirection: _react2.default.PropTypes.string
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
    var classes = (0, _classnames2.default)({ 'bar': true, 'bar-header': true }, this.props.customClasses || 'bar-stable', // default class
    'nav-bar-block', { 'nav-bar-transition-android': platform.isAndroid,
      'nav-bar-transition-ios': !platform.isAndroid
    }, 'nav-bar-direction-' + this.context.ionNavDirection);
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement(
        _animate2.default,
        {
          transitionEnterTimeout: platform.transitionTimeOut,
          transitionName: {
            enter: 'button-entering',
            enterActive: 'button-active',
            leave: 'button-leaving',
            leaveActive: 'button-active'
          },
          transitionLeave: false
        },
        _react2.default.createElement(
          _containers.LeftButtonContainer,
          { setMarginCompensation: this.setMarginCompensation },
          leftButton
        )
      ),
      _react2.default.createElement(
        _animate2.default,
        {
          transitionEnterTimeout: platform.transitionTimeOut,
          transitionLeaveTimeout: platform.transitionTimeOut,
          transitionName: {
            enter: 'title-entering',
            enterActive: 'title-active',
            leave: 'title-leaving',
            leaveActive: 'title-active'
          }
        },
        _react2.default.createElement(
          _ionTitle2.default,
          { marginCompensation: this.state.marginCompensation, customClasses: 'title-stage' },
          this.props.title
        )
      ),
      _react2.default.createElement(
        _animate2.default,
        {
          transitionEnterTimeout: platform.transitionTimeOut,
          component: 'div',
          transitionName: {
            enter: 'button-entering',
            enterActive: 'button-active',
            leave: 'button-leaving',
            leaveActive: 'button-active'
          },
          transitionLeave: false,
          className: 'buttons pull-right'
        },
        this.props.rightButton
      )
    );
  }
});

exports.default = IonNavBar;