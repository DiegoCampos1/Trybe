import React from 'react';
import { TodoProvider } from './components/TodoContext';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <FilterTodos />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
