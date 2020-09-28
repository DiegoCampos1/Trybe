import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'done':
      return todos.filter((todo) => todo.completed);
    case 'progress':
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

const TodoList = () => {
  const { todos, toggleTodo, filter } = useContext(TodoContext);
  return (
    <ul>
      {getTodos(todos, filter).map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
export default TodoList;