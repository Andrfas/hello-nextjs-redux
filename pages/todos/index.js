import fetch from 'isomorphic-unfetch'

import DefaultLayout from '../../components/Layouts/Default';

const Todos = ({ todos }) => {
  return (<DefaultLayout>
    Here is where a list goes
    <TodosList todos={todos} />
  </DefaultLayout>)
}

const TodosList = ({todos}) => {
  return (<ul>
    {todos.map((todo)=> {
      return <li key={todo.id}>
        <input type="checkbox" />
        <span>{todo.title}</span>
      </li>
    })}
  </ul>)
}

Todos.getInitialProps = async ({ req }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const json = await res.json();
  return { todos: json };
}

export default Todos;