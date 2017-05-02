'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;

var _constants = require('./constants');

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