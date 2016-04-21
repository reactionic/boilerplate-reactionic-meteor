'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonTabs = _react2.default.createClass({
  displayName: 'IonTabs',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    tabsTop: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: ''
    };
  },
  contextTypes: {
    ionUpdateHasX: _react2.default.PropTypes.func
  },
  componentWillMount: function componentWillMount() {
    if (this.props.tabsTop) {
      this.context.ionUpdateHasX('ionHasTabsTop', true);
    } else {
      this.context.ionUpdateHasX('ionHasTabs', true);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.props.tabsTop) {
      this.context.ionUpdateHasX('ionHasTabsTop', false);
    } else {
      this.context.ionUpdateHasX('ionHasTabs', false);
    }
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'tabs-top': this.props.tabsTop }, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement(
        'div',
        { className: 'tabs' },
        this.props.children
      )
    );
  }
});

exports.default = IonTabs;