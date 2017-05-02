
          window.__NEXT_REGISTER_PAGE('/todos', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TODO = exports.ADD_TODO = 'pages/todos/addTodo';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'pages/todos/toggleTodo';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/constants.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/constants.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(module.exports.default || module.exports, "/todos/constants")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 571:
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

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _isomorphicUnfetch = __webpack_require__(576);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(585);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _redux = __webpack_require__(559);

var _reduxDevtoolsExtension = __webpack_require__(607);

var _Default = __webpack_require__(594);

var _Default2 = _interopRequireDefault(_Default);

var _reducer = __webpack_require__(589);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(588);

var acts = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/index.js?entry';


var Todos = function (_React$Component) {
  (0, _inherits3.default)(Todos, _React$Component);

  function Todos() {
    (0, _classCallCheck3.default)(this, Todos);

    return (0, _possibleConstructorReturn3.default)(this, (Todos.__proto__ || (0, _getPrototypeOf2.default)(Todos)).apply(this, arguments));
  }

  (0, _createClass3.default)(Todos, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Default2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Here is where a list goes', _react2.default.createElement(TodosList, { todos: this.props.todos, todoClicked: this.props.onTodoClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            store = _ref.store;
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

                // console.log('getInitialProps: ', json);
                json.map(function (todo) {
                  store.dispatch(acts.addTodo(todo));
                });
                return _context.abrupt('return', { todos: json });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Todos;
}(_react2.default.Component);

var TodosList = function TodosList(_ref3) {
  var todos = _ref3.todos,
      todoClicked = _ref3.todoClicked;

  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, todos.map(function (todo) {
    return _react2.default.createElement('li', { key: todo.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, todo.completed ? '+  ' : '-  ', _react2.default.createElement('span', { onClick: todoClicked.bind(null, todo), __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, todo.title));
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: function onTodoClick(todo) {
      dispatch(acts.toggleTodo(todo));
    },
    onTodoAdd: function onTodoAdd(todo) {
      dispatch(acts.addTodo(todo));
    }
  };
};

function makeStore(initState) {
  console.log('makeStore', initState);
  return (0, _redux.createStore)(_reducer2.default, initState, (0, _reduxDevtoolsExtension.composeWithDevTools)());
}

exports.default = (0, _nextReduxWrapper2.default)(makeStore, mapStateToProps, mapDispatchToProps)(Todos);

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

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;

var _constants = __webpack_require__(563);

var consts = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addTodo(todo) {
  return {
    type: consts.ADD_TODO,
    todo: todo
  };
};

function toggleTodo(todo) {
  return {
    type: consts.TOGGLE_TODO,
    todo: todo
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/actions.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(module.exports.default || module.exports, "/todos/actions")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(91);

var _assign2 = _interopRequireDefault(_assign);

var _constants = __webpack_require__(563);

var consts = _interopRequireWildcard(_constants);

var _redux = __webpack_require__(559);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import store from '../store';

var initialState = {
  todos: []
};

function TodosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case consts.ADD_TODO:
      var st = (0, _assign2.default)({}, state, {
        todos: state.todos.push(action.todo) && state.todos
      });
      return st;
    case consts.TOGGLE_TODO:
      return (0, _assign2.default)({}, state, {
        todos: state.todos.map(function (todo) {
          if (todo.id == action.todo.id) todo.completed = !todo.completed;
          return todo;
        })
      });
    default:
      return state;
  }
}

exports.default = TodosReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/pages/todos/reducer.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(module.exports.default || module.exports, "/todos/reducer")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _PageHeader = __webpack_require__(595);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andrfas/Documents/Projects/hello-next-redux/components/Layouts/Default/index.js';


var DefaultLayout = function DefaultLayout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
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

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(596);

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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nextRoutes = __webpack_require__(586);
var routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('todos', '/todos');
routes.add('todo', '/todos/:id');
routes.add('about', '/about');

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/andrfas/Documents/Projects/hello-next-redux/routes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/andrfas/Documents/Projects/hello-next-redux/routes.js"); } } })();

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(571);


/***/ })

},[614]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90b2Rvcy9jb25zdGFudHMuanM/ODcwYjkzZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b2Rvcz84NzBiOTNkIiwid2VicGFjazovLy8uL3BhZ2VzL3RvZG9zL2FjdGlvbnMuanM/ODcwYjkzZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b2Rvcy9yZWR1Y2VyLmpzPzg3MGI5M2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXRzL0RlZmF1bHQvaW5kZXguanM/ODcwYjkzZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VIZWFkZXIvaW5kZXguanM/ODcwYjkzZCIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ODcwYjkzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLDhCQUNiO0FBQU8sSUFBTSxvQ0FBYyx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0M7O0FBQ0M7O0FBRUY7Ozs7QUFDQTs7OztBQUNBOztJQUFLOzs7Ozs7Ozs7SUFHTjs7Ozs7Ozs7Ozs7NkJBWUY7NkJBQVM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUVOLDJEQUFDLGFBQVUsT0FBTyxLQUFLLE1BQU0sT0FBTyxhQUFhLEtBQUssTUFBTTtvQkFBNUQ7c0JBRUg7QUFGRzs7Ozs7OztZQWI0QjtZQUFLOzs7Ozs7O3VCQUVqQixpQ0FBTTs7bUJBQWxCOzs7dUJBQ2EsSUFBSTs7bUJBQWpCO2dDQUNOOztBQUNBO3FCQUFLLElBQUksVUFBQyxNQUNSO3dCQUFNLFNBQVMsS0FBSyxRQUNyQjtBQUZEO2lEQUdPLEVBQUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVRBLGdCQUFNOztBQW1CMUIsSUFBTSxZQUFZLDBCQUEwQjtNQUFBO01BQUEsb0JBQzFDOzt5QkFBUTs7Z0JBQUE7a0JBQ0w7QUFESztBQUFBLFdBQ0MsSUFBSSxVQUFDLE1BQ1Y7MkJBQU8sc0JBQUksS0FBSyxLQUFLO2tCQUFkO29CQUVKO0FBRkk7S0FBQSxPQUVDLFlBQVksUUFDbEIsK0NBQU0sU0FBUyxZQUFZLEtBQUssTUFBTTtrQkFBdEM7b0JBQThDO0FBQTlDO1lBRUg7QUFFSjtBQVZEOztBQVlBLElBQU0sa0JBQWtCLHlCQUFDLE9BQ3ZCOztXQUNTLE1BRVY7QUFGRztBQUZKOztBQU1BLElBQU0scUJBQXFCLDRCQUFDLFVBQzFCOztpQkFDZSxxQkFBQyxNQUNaO2VBQVMsS0FBSyxXQUNmO0FBQ0Q7ZUFBVyxtQkFBQyxNQUNWO2VBQVMsS0FBSyxRQUNmO0FBRUo7QUFQRztBQUZKOztBQVdBLFNBQVMsVUFBVSxXQUNqQjtVQUFRLElBQUksYUFDWjtTQUFtQiwyQ0FBYyxXQUNsQztBQUVEOztrQkFBZSxnQ0FBVSxXQUFXLGlCQUFpQixvQkFBb0IsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDOUR6RDtRQU9BOztBQVRUOztJQUVQOzs7O0FBQU8saUJBQWlCLE1BQ3RCOztVQUNRLE9BQ047VUFFSDtBQUhHO0FBS0o7O0FBQU8sb0JBQW9CLE1BQ3pCOztVQUNRLE9BQ047VUFFSDtBQUhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRzs7SUFBSzs7QUFDSjs7Ozs7O0FBQ1I7O0FBRUEsSUFBTTtTQUNHO0FBQVA7O0FBR0YsU0FBUyxlQUE0QztNQUFBO01BQUEsbUJBQ25EOztVQUFPLE9BQ0w7U0FBSyxPQUNIO1VBQUksMkJBQW1CLElBQUk7ZUFDbEIsTUFBTSxNQUFNLEtBQUssT0FBTyxTQUFTLE1BRTFDO0FBRkUsT0FETzthQUlYO1NBQUssT0FDSDttQ0FBcUIsSUFBSTtxQkFDVixNQUFNLElBQUksVUFBQyxNQUN0QjtjQUFHLEtBQUssTUFBTSxPQUFPLEtBQUssSUFBSSxLQUFLLFlBQVksQ0FBQyxLQUNoRDtpQkFDRDtBQUVMLFNBTFc7QUFBUCxPQURLO0FBT1A7YUFFTDs7QUFFRDs7a0JBQWUsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQlI7Ozs7Ozs7OztBQUVQLElBQU0sZ0JBQWdCLHVCQUFDLE9BQ3JCO3lCQUNFOztnQkFBQTtrQkFBSztBQUFMO0FBQUEscUJBQU07O2dCQUFEO2tCQUNKO0FBREk7QUFBQSxZQUdSO0FBRUQ7O2tCQUFlLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7Ozs7O0FBRFI7OztBQUdBLElBQU0sYUFBYSxzQkFDakI7eUJBQ0U7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRyw4QkFBSyxPQUFNO2dCQUFaO2tCQUNFO0FBREY7cUJBQ0U7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUVGLDBCQUFDLDhCQUFLLE9BQU07Z0JBQVo7a0JBQ0U7QUFERjtxQkFDRTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRUYsMkJBQUMsOEJBQUssT0FBTTtnQkFBWjtrQkFDRTtBQURGO3FCQUNFOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FHUDtBQUVEOztrQkFBZSxXOzs7Ozs7Ozs7Ozs7QUNsQmYsSUFBTSxhQUFhO0FBQ25CLElBQU0sU0FBUyxPQUFPLFVBQVU7O0FBRWhDLE9BQU8sSUFBSSxTQUFTO0FBQ3BCLE9BQU8sSUFBSSxTQUFTO0FBQ3BCLE9BQU8sSUFBSSxRQUFRO0FBQ25CLE9BQU8sSUFBSSxTQUFTLFUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2Rvcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfVE9ETyA9ICdwYWdlcy90b2Rvcy9hZGRUb2RvJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfVE9ETyA9ICdwYWdlcy90b2Rvcy90b2dnbGVUb2RvJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90b2Rvcy9jb25zdGFudHMuanMiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMvRGVmYXVsdCc7XG5pbXBvcnQgVG9kb3NSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgKiBhcyBhY3RzIGZyb20gJy4vYWN0aW9ucyc7XG5cblxuY2xhc3MgVG9kb3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSwgc3RvcmUgfSkge1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2RvcycpXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dldEluaXRpYWxQcm9wczogJywganNvbik7XG4gICAganNvbi5tYXAoKHRvZG8pID0+IHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdHMuYWRkVG9kbyh0b2RvKSk7XG4gICAgfSlcbiAgICByZXR1cm4geyB0b2RvczoganNvbiB9O1xuICB9XG4gIHJlbmRlcigpIHsgXG4gICAgcmV0dXJuICg8RGVmYXVsdExheW91dD5cbiAgICAgIEhlcmUgaXMgd2hlcmUgYSBsaXN0IGdvZXNcbiAgICAgIDxUb2Rvc0xpc3QgdG9kb3M9e3RoaXMucHJvcHMudG9kb3N9IHRvZG9DbGlja2VkPXt0aGlzLnByb3BzLm9uVG9kb0NsaWNrfSAvPlxuICAgIDwvRGVmYXVsdExheW91dD4pXG4gIH1cbn1cblxuY29uc3QgVG9kb3NMaXN0ID0gKHt0b2RvcywgdG9kb0NsaWNrZWR9KSA9PiB7XG4gIHJldHVybiAoPHVsPlxuICAgIHt0b2Rvcy5tYXAoKHRvZG8pPT4ge1xuICAgICAgcmV0dXJuIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICB7Lyo8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e3RvZG8uY29tcGxldGVkfSAvPiovfVxuICAgICAgICB7dG9kby5jb21wbGV0ZWQgPyAnKyAgJyA6ICctICAnfVxuICAgICAgICA8c3BhbiBvbkNsaWNrPXt0b2RvQ2xpY2tlZC5iaW5kKG51bGwsIHRvZG8pfT57dG9kby50aXRsZX08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIH0pfVxuICA8L3VsPilcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9kb3M6IHN0YXRlLnRvZG9zXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25Ub2RvQ2xpY2s6ICh0b2RvKSA9PiB7XG4gICAgICBkaXNwYXRjaChhY3RzLnRvZ2dsZVRvZG8odG9kbykpXG4gICAgfSxcbiAgICBvblRvZG9BZGQ6ICh0b2RvKSA9PiB7XG4gICAgICBkaXNwYXRjaChhY3RzLmFkZFRvZG8odG9kbykpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTdG9yZShpbml0U3RhdGUpIHtcbiAgY29uc29sZS5sb2coJ21ha2VTdG9yZScsIGluaXRTdGF0ZSk7XG4gIHJldHVybiBjcmVhdGVTdG9yZShUb2Rvc1JlZHVjZXIsIGluaXRTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scygpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9kb3MpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kb3M/ZW50cnkiLCJpbXBvcnQgKiBhcyBjb25zdHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogY29uc3RzLkFERF9UT0RPLFxuICAgIHRvZG9cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRvZG8odG9kbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGNvbnN0cy5UT0dHTEVfVE9ETyxcbiAgICB0b2RvXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kb3MvYWN0aW9ucy5qcyIsImltcG9ydCAqIGFzIGNvbnN0cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuLy8gaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0b2RvczogW11cbn1cblxuZnVuY3Rpb24gVG9kb3NSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgY29uc3RzLkFERF9UT0RPOlxuICAgICAgdmFyIHN0ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdG9kb3M6IHN0YXRlLnRvZG9zLnB1c2goYWN0aW9uLnRvZG8pICYmIHN0YXRlLnRvZG9zXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdDtcbiAgICBjYXNlIGNvbnN0cy5UT0dHTEVfVE9ETzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB0b2Rvczogc3RhdGUudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgaWYodG9kby5pZCA9PSBhY3Rpb24udG9kby5pZCkgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2Rvc1JlZHVjZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kb3MvcmVkdWNlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vUGFnZUhlYWRlcic7XG5cbmNvbnN0IERlZmF1bHRMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PjxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dHMvRGVmYXVsdC9pbmRleC5qcyIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uL3JvdXRlcydcblxuY29uc3QgUGFnZUhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmsgcm91dGU9XCJpbmRleFwiPlxuICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcm91dGU9XCJ0b2Rvc1wiPlxuICAgICAgICA8YT5Ub2RvczwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIHJvdXRlPVwiYWJvdXRcIj5cbiAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnZUhlYWRlci9pbmRleC5qcyIsImNvbnN0IG5leHRSb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpXG5jb25zdCByb3V0ZXMgPSBtb2R1bGUuZXhwb3J0cyA9IG5leHRSb3V0ZXMoKVxuXG5yb3V0ZXMuYWRkKCdpbmRleCcsICcvJyk7XG5yb3V0ZXMuYWRkKCd0b2RvcycsICcvdG9kb3MnKTtcbnJvdXRlcy5hZGQoJ3RvZG8nLCAnL3RvZG9zLzppZCcpO1xucm91dGVzLmFkZCgnYWJvdXQnLCAnL2Fib3V0Jyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        