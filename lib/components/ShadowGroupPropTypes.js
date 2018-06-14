'use strict';

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  shadowColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  shadowOffset: { width: _propTypes2.default.number, height: _propTypes2.default.number },
  shadowSpread: _propTypes2.default.number,
  shadowOpacity: _propTypes2.default.number,
  shadowRadius: _propTypes2.default.number
};