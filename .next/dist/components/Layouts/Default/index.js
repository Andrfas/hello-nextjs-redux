'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageHeader = require('../../PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrfas/Documents/Projects/hello-next-redux/components/Layouts/Default/index.js';


var DefaultLayout = function DefaultLayout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_PageHeader2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), props.children);
};

exports.default = DefaultLayout;