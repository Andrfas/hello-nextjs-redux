// import * as consts from './constants';
import {combineReducers} from 'redux';
// import store from '../store';

const initialState = {
  aboutInfo: ''
}
function TodosReducer (state = initialState, action) {
  switch(action.type) {
    case 'about.ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.push(action.todo)
      });
    default:
      return state
  }
}

// store.asyncReducers['todos'] = TodosReducer;
// store.replaceReducer(combineReducers({
//   ...store.asyncReducers,
// }));

export default TodosReducer;