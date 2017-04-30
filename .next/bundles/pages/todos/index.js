
          window.__NEXT_REGISTER_PAGE('/todos', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _PageHeader = __webpack_require__(570);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/components/Layouts/Default/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/components/Layouts/Default/index.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(571);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/andrfas/Documents/Projects/hello-next-redux/components/PageHeader/index.js";
// import Link from 'next/link';


var PageHeader = function PageHeader() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_routes.Link, { route: "index", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Home")), _react2.default.createElement(_routes.Link, { route: "todos", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Todos")), _react2.default.createElement(_routes.Link, { route: "about", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "About")));
};

exports.default = PageHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/components/PageHeader/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/components/PageHeader/index.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nextRoutes = __webpack_require__(563);
var routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('todos', '/todos');
routes.add('todo', '/todos/:id');
routes.add('about', '/about');

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/routes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/routes.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[572]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90b2Rvcz82YzlkYTcwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0cy9EZWZhdWx0L2luZGV4LmpzPzZjOWRhNzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlSGVhZGVyL2luZGV4LmpzPzZjOWRhNzAiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzPzZjOWRhNzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBRUE7Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxxQkFBZTtNQUFBLGFBQzNCOzt5QkFBUzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEtBRU4sMkRBQUMsYUFBVSxPQUFPO2dCQUFsQjtrQkFFSDtBQUZHOztBQUhKOztBQU9BLElBQU0sWUFBWSwwQkFBYTtNQUFBLGNBQzdCOzt5QkFBUTs7Z0JBQUE7a0JBQ0w7QUFESztBQUFBLFdBQ0MsSUFBSSxVQUFDLE1BQ1Y7MkJBQU8sc0JBQUksS0FBSyxLQUFLO2tCQUFkO29CQUNMO0FBREs7S0FBQSwyQ0FDRSxNQUFLO2tCQUFaO29CQUNBO0FBREE7d0JBQ0E7O2tCQUFBO29CQUFPO0FBQVA7QUFBQSxZQUVIO0FBRUo7QUFURDs7QUFXQSxNQUFNLDhCQUFOO3lFQUF3QjtRQUFTO2FBQVQ7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDSixpQ0FBTTs7ZUFBbEI7QUFEZ0I7NEJBQUE7bUJBRUgsSUFBSTs7ZUFBakI7QUFGZ0I7NkNBR2YsRUFBRSxPQUFPOztlQUhNO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBeEI7O3VCQUFBOzZCQUFBO0FBQUE7QUFNQTs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QlI7Ozs7Ozs7OztBQUVQLElBQU0sZ0JBQWdCLHVCQUFDLE9BQ3JCO3lCQUFROztnQkFBQTtrQkFDTjtBQURNO0FBQUEscUJBQ0w7O2dCQUFEO2tCQUNDO0FBREQ7QUFBQSxZQUdIO0FBRUQ7O2tCQUFlLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7Ozs7O0FBRFI7OztBQUdBLElBQU0sYUFBYSxzQkFDakI7eUJBQ0U7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRyw4QkFBSyxPQUFNO2dCQUFaO2tCQUNFO0FBREY7cUJBQ0U7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUVGLDBCQUFDLDhCQUFLLE9BQU07Z0JBQVo7a0JBQ0U7QUFERjtxQkFDRTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRUYsMkJBQUMsOEJBQUssT0FBTTtnQkFBWjtrQkFDRTtBQURGO3FCQUNFOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FHUDtBQUVEOztrQkFBZSxXOzs7Ozs7Ozs7Ozs7QUNsQmYsSUFBTSxhQUFhO0FBQ25CLElBQU0sU0FBUyxPQUFPLFVBQVU7O0FBRWhDLE9BQU8sSUFBSSxTQUFTO0FBQ3BCLE9BQU8sSUFBSSxTQUFTO0FBQ3BCLE9BQU8sSUFBSSxRQUFRO0FBQ25CLE9BQU8sSUFBSSxTQUFTLFUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2Rvcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0cy9EZWZhdWx0JztcblxuY29uc3QgVG9kb3MgPSAoeyB0b2RvcyB9KSA9PiB7XG4gIHJldHVybiAoPERlZmF1bHRMYXlvdXQ+XG4gICAgSGVyZSBpcyB3aGVyZSBhIGxpc3QgZ29lc1xuICAgIDxUb2Rvc0xpc3QgdG9kb3M9e3RvZG9zfSAvPlxuICA8L0RlZmF1bHRMYXlvdXQ+KVxufVxuXG5jb25zdCBUb2Rvc0xpc3QgPSAoe3RvZG9zfSkgPT4ge1xuICByZXR1cm4gKDx1bD5cbiAgICB7dG9kb3MubWFwKCh0b2RvKT0+IHtcbiAgICAgIHJldHVybiA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxzcGFuPnt0b2RvLnRpdGxlfTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgfSl9XG4gIDwvdWw+KVxufVxuXG5Ub2Rvcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJylcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHRvZG9zOiBqc29uIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3RvZG9zP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9QYWdlSGVhZGVyJztcblxuY29uc3QgRGVmYXVsdExheW91dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKDxkaXY+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0cy9EZWZhdWx0L2luZGV4LmpzIiwiLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vcm91dGVzJ1xuXG5jb25zdCBQYWdlSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayByb3V0ZT1cImluZGV4XCI+XG4gICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayByb3V0ZT1cInRvZG9zXCI+XG4gICAgICAgIDxhPlRvZG9zPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcm91dGU9XCJhYm91dFwiPlxuICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QYWdlSGVhZGVyL2luZGV4LmpzIiwiY29uc3QgbmV4dFJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJylcbmNvbnN0IHJvdXRlcyA9IG1vZHVsZS5leHBvcnRzID0gbmV4dFJvdXRlcygpXG5cbnJvdXRlcy5hZGQoJ2luZGV4JywgJy8nKTtcbnJvdXRlcy5hZGQoJ3RvZG9zJywgJy90b2RvcycpO1xucm91dGVzLmFkZCgndG9kbycsICcvdG9kb3MvOmlkJyk7XG5yb3V0ZXMuYWRkKCdhYm91dCcsICcvYWJvdXQnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXMuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        