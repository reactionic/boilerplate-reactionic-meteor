'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ionSpinner = require('./ionSpinner');

var _ionSpinner2 = _interopRequireDefault(_ionSpinner);

var _timeout = require('../helpers/timeout');

var _timeout2 = _interopRequireDefault(_timeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonLoading = _react2.default.createClass({
  displayName: 'IonLoading',

  propTypes: {
    // TODO: proptype checking for show if not false
    show: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.object])
  },
  getDefaultProps: function getDefaultProps() {
    return {
      show: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      wait: false // used for user-option 'delay'
    };
  },
  contextTypes: {
    ionShowBackdrop: _react2.default.PropTypes.func,
    ionShowLoading: _react2.default.PropTypes.func
  },
  getOptions: function getOptions(props) {
    if (props.show === false) {
      return false;
    }
    // merge default options with user options
    var options = Object.assign({
      delay: 0,
      duration: null,
      customTemplate: null,
      backdrop: false
    }, props.show);
    return options;
  },
  mixins: [_timeout2.default],
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this = this;

    if (this.props.show !== false && nextProps.show === false) {
      // we will shop loading, so hide a potential backdrop
      this.context.ionShowBackdrop(false);
      // also clear possible timeouts
      this.clearTimeouts();
    } else if (this.props.show === false && nextProps.show !== false) {
      // we will start loading, so introduce delay, show the backdrop, etc. if desired
      var nextOptions = this.getOptions(nextProps);
      if (nextOptions.duration > 0 && nextOptions.duration < nextOptions.delay) {
        console.warn("IonLoading: duration should be longer than delay");
        this.context.ionShowLoading(false);
        return;
      }
      if (nextOptions.delay > 0) {
        this.setState({ wait: true });
        this.setTimeout(function () {
          return _this.setState({ wait: false });
        }, nextOptions.delay);
      }
      if (nextOptions.backdrop) {
        this.setTimeout(function () {
          return _this.context.ionShowBackdrop(true);
        }, nextOptions.delay);
      }
      if (nextOptions.duration > 0) {
        this.setTimeout(function () {
          return _this.context.ionShowLoading(false);
        }, nextOptions.duration);
      }
    }
  },
  render: function render() {
    var loading;
    if (this.props.show !== false && !this.state.wait) {
      var options = this.getOptions(this.props);
      var template = options.customTemplate || _react2.default.createElement(_ionSpinner2.default, {
        icon: 'ios-small',
        customClasses: 'inloader spinner-light' });
      loading = _react2.default.createElement(
        'div',
        { className: 'loading-container visible active' },
        _react2.default.createElement(
          'div',
          { className: 'loading' },
          template
        )
      );
    } else {
      loading = false;
    }
    return _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        transitionEnterTimeout: 200,
        transitionLeave: false,
        transitionName: {
          enter: 'loading-invisible',
          enterActive: 'loading-visible'
        }
      },
      loading
    );
  }
});

exports.default = IonLoading;