'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonContent = _react2.default.createClass({
  displayName: 'IonContent',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    scroll: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      scroll: true
    };
  },
  contextTypes: {
    ionHasHeader: _react2.default.PropTypes.bool,
    ionHasSubheader: _react2.default.PropTypes.bool,
    ionHasTabs: _react2.default.PropTypes.bool,
    ionHasTabsTop: _react2.default.PropTypes.bool,
    ionHasFooter: _react2.default.PropTypes.bool,
    ionHasSubfooter: _react2.default.PropTypes.bool,
    ionKeyboardHeight: _react2.default.PropTypes.number
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'content': true }, this.props.customClasses, {
      'overflow-scroll': this.props.scroll !== false,
      'has-header': this.context.ionHasHeader,
      'has-subheader': this.context.ionHasSubheader,
      'has-tabs': this.context.ionHasTabs,
      'has-tabs-top': this.context.ionHasTabsTop,
      'has-footer': this.context.ionHasFooter,
      'has-subfooter': this.context.ionHasSubfooter
    });
    var divStyle = {};
    if (this.context.ionKeyboardHeight > 0) {
      divStyle = { bottom: this.context.ionKeyboardHeight };
    }

    var outerClasses = (0, _classnames2.default)('scroll-content ionic-scroll', { 'ios-top-margin': !this.context.ionHasHeader });

    return _react2.default.createElement(
      'div',
      { className: outerClasses, style: divStyle },
      _react2.default.createElement(
        'div',
        { className: classes },
        this.props.children
      )
    );
  }
});

exports.default = IonContent;