import fetch from 'isomorphic-unfetch'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import DefaultLayout from '../../components/Layouts/Default';
import TodosReducer from './reducer';
import * as acts from './actions';


class Todos extends React.Component {
  static async getInitialProps ({ req, store }) {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await res.json();
    // console.log('getInitialProps: ', json);
    json.map((todo) => {
      store.dispatch(acts.addTodo(todo));
    })
    return { todos: json };
  }
  render() { 
    return (<DefaultLayout>
      Here is where a list goes
      <TodosList todos={this.props.todos} todoClicked={this.props.onTodoClick} />
    </DefaultLayout>)
  }
}

const TodosList = ({todos, todoClicked}) => {
  return (<ul>
    {todos.map((todo)=> {
      return <li key={todo.id}>
        {/*<input type="checkbox" value={todo.completed} />*/}
        {todo.completed ? '+  ' : '-  '}
        <span onClick={todoClicked.bind(null, todo)}>{todo.title}</span>
      </li>
    })}
  </ul>)
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (todo) => {
      dispatch(acts.toggleTodo(todo))
    },
    onTodoAdd: (todo) => {
      dispatch(acts.addTodo(todo))
    }
  }
}

function makeStore(initState) {
  console.log('makeStore', initState);
  return createStore(TodosReducer, initState, composeWithDevTools())
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Todos)