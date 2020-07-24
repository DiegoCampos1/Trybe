import React, { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: currentId, text, completed: false }]);
    setCurrentId(currentId + 1);
  };

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const context = { todos, currentId, filter, addTodo, filterTodos, toggleTodo };

  return (
  <TodoContext.Provider value={context}>
    {children}
  </TodoContext.Provider>);
};

export { TodoContext, TodoProvider };