import * as consts from './constants';

export function addTodo(todo) {
  return {
    type: consts.ADD_TODO,
    todo
  }
};

export function toggleTodo(todo) {
  return {
    type: consts.TOGGLE_TODO,
    todo
  }
};