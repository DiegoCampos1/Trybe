import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const FilterTodos = () => {
  const { filterTodos } = useContext(TodoContext);
  return (
    <div>
      <button type="button" onClick={() => filterTodos('all')}>
        Todos
      </button>
      <button type="button" onClick={() => filterTodos('done')}>
        Finalizados
      </button>
      <button type="button" onClick={() => filterTodos('progress')}>
        Em andamento{' '}
      </button>
    </div>
  );
};

export default FilterTodos;