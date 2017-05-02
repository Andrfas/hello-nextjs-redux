'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _Default = require('../../components/Layouts/Default');

var _Default2 = _interopRequireDefault(_Default);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('./actions');

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