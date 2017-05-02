'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _constants = require('./constants');

var consts = _interopRequireWildcard(_constants);

var _redux = require('redux');

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