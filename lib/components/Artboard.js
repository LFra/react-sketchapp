'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _stylesheet = require('../stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _ViewStylePropTypes = require('./ViewStylePropTypes');

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  // TODO(lmr): do some nice warning stuff like RN does
  style: _propTypes2.default.oneOfType([_propTypes2.default.shape(_extends({}, _ViewStylePropTypes2.default)), _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape(_extends({}, _ViewStylePropTypes2.default)), _propTypes2.default.number])), _propTypes2.default.number]),
  name: _propTypes2.default.string,
  children: _propTypes2.default.node
};

// $FlowFixMe

var Artboard = function (_React$Component) {
  _inherits(Artboard, _React$Component);

  function Artboard() {
    _classCallCheck(this, Artboard);

    return _possibleConstructorReturn(this, (Artboard.__proto__ || Object.getPrototypeOf(Artboard)).apply(this, arguments));
  }

  _createClass(Artboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'artboard',
        { style: _stylesheet2.default.flatten(this.props.style), name: this.props.name },
        this.props.children
      );
    }
  }]);

  return Artboard;
}(_react2.default.Component);

Artboard.defaultProps = {
  name: 'Artboard'
};


Artboard.propTypes = propTypes;

module.exports = Artboard;