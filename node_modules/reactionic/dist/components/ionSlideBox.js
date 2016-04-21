'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonSlideBox = _react2.default.createClass({
  displayName: 'IonSlideBox',
  render: function render() {
    var settings = {
      className: 'ion-slide-box',
      infinite: false,
      autoplay: false,
      arrows: false,
      dots: true,
      dotsClass: 'slick-dots slider-pager',
      initialSlide: 0
    };
    return _react2.default.createElement(
      _reactSlick2.default,
      settings,
      this.props.children
    );
  }
});

exports.default = IonSlideBox;