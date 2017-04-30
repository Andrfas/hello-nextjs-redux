webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(562);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Default = __webpack_require__(569);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/todos")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90b2Rvcz9iNTQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBRUE7Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxxQkFBZTtNQUFBLGFBQzNCOzt5QkFBUzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEtBRU4sMkRBQUMsYUFBVSxPQUFPO2dCQUFsQjtrQkFFSDtBQUZHOztBQUhKOztBQU9BLElBQU0sWUFBWSwwQkFBYTtNQUFBLGNBQzdCOzt5QkFBUTs7Z0JBQUE7a0JBQ0w7QUFESztBQUFBLFdBQ0MsSUFBSSxVQUFDLE1BQ1Y7MkJBQU8sc0JBQUksS0FBSyxLQUFLO2tCQUFkO29CQUNMO0FBREs7S0FBQSwyQ0FDRSxNQUFLO2tCQUFaO29CQUNBO0FBREE7d0JBQ0E7O2tCQUFBO29CQUFPO0FBQVA7QUFBQSxZQUVIO0FBRUo7QUFURDs7QUFXQSxNQUFNLDhCQUFOO3lFQUF3QjtRQUFTO2FBQVQ7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDSixpQ0FBTTs7ZUFBbEI7QUFEZ0I7NEJBQUE7bUJBRUgsSUFBSTs7ZUFBakI7QUFGZ0I7NkNBR2YsRUFBRSxPQUFPOztlQUhNO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBeEI7O3VCQUFBOzZCQUFBO0FBQUE7QUFNQTs7a0JBQWUsTSIsImZpbGUiOiI1LjA3M2QwOTYzMTQ3N2QyNDBlNGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMvRGVmYXVsdCc7XG5cbmNvbnN0IFRvZG9zID0gKHsgdG9kb3MgfSkgPT4ge1xuICByZXR1cm4gKDxEZWZhdWx0TGF5b3V0PlxuICAgIEhlcmUgaXMgd2hlcmUgYSBsaXN0IGdvZXNcbiAgICA8VG9kb3NMaXN0IHRvZG9zPXt0b2Rvc30gLz5cbiAgPC9EZWZhdWx0TGF5b3V0Pilcbn1cblxuY29uc3QgVG9kb3NMaXN0ID0gKHt0b2Rvc30pID0+IHtcbiAgcmV0dXJuICg8dWw+XG4gICAge3RvZG9zLm1hcCgodG9kbyk9PiB7XG4gICAgICByZXR1cm4gPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8c3Bhbj57dG9kby50aXRsZX08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIH0pfVxuICA8L3VsPilcbn1cblxuVG9kb3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2RvcycpXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4geyB0b2RvczoganNvbiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90b2Rvcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=