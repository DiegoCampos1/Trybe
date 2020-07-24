import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const AddTodo = () => {
  let input;

  const { addTodo } = useContext(TodoContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTodo(input.value);
        input.value = '';
      }}
    >
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
