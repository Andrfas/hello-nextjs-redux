import * as consts from './constants';
import {combineReducers} from 'redux';
// import store from '../store';

const initialState = {
  todos: []
}

function TodosReducer (state = initialState, action) {
  switch(action.type) {
    case consts.ADD_TODO:
      var st = Object.assign({}, state, {
        todos: state.todos.push(action.todo) && state.todos
      });
      return st;
    case consts.TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if(todo.id == action.todo.id) todo.completed = !todo.completed;
          return todo;
        })
      })
    default:
      return state
  }
}

export default TodosReducer;