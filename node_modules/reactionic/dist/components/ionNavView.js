'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _animate = require('../helpers/animate');

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonNavView = _react2.default.createClass({
  displayName: 'IonNavView',

  propTypes: {
    customClasses: _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    // no need to set default platform and ionSetTransitionDirection as it is propogated from IonBody
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionPlatform: _react2.default.PropTypes.object,
    ionNavDirection: _react2.default.PropTypes.string,
    ionSetTransitionDirection: _react2.default.PropTypes.func
  },
  render: function render() {
    var platform = this.context.ionPlatform;
    var classes = (0, _classnames2.default)({ 'nav-view-transition-android': platform.isAndroid,
      'nav-view-transition-ios': !platform.isAndroid
    }, 'nav-view-direction-' + this.context.ionNavDirection, this.props.customClasses);
    return _react2.default.createElement(
      _animate2.default,
      {
        component: 'div',
        transitionEnterTimeout: platform.transitionTimeOut,
        transitionLeaveTimeout: platform.transitionTimeOut,
        transitionName: {
          enter: 'nav-view-entering',
          enterActive: 'nav-view-active',
          leave: 'nav-view-leaving',
          leaveActive: 'nav-view-active'
        },
        className: classes
      },
      this.props.children
    );
  }
});

exports.default = IonNavView;