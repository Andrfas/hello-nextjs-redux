'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Default = require('../../components/Layouts/Default');

var _Default2 = _interopRequireDefault(_Default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/index.js?entry',
    _this = undefined;

var Todos = function Todos(_ref) {
  var todos = _ref.todos;

  return _react2.default.createElement(_Default2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Here is where a list goes', _react2.default.createElement(TodosList, { todos: todos, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

var TodosList = function TodosList(_ref2) {
  var todos = _ref2.todos;

  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, todos.map(function (todo) {
    return _react2.default.createElement('li', { key: todo.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('input', { type: 'checkbox', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }), _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, todo.title));
  }));
};

Todos.getInitialProps = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
    var req = _ref3.req;
    var res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)('https://jsonplaceholder.typicode.com/todos');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt('return', { todos: json });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

exports.default = Todos;