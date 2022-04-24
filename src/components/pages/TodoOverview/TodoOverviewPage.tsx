import React from 'react';
import { useTodoStore } from '@/store/TodoStore';

export const TodoOverviewPage = () => {
  const todoData = useTodoStore();

  console.log(todoData);

  return (
    <div>
      <div>Hello World</div>
      <div>Todo Overview Page</div>
      <hr />
      {todoData.map(todo => (
        <div key={todo.name}>{todo.name}</div>
      ))}
    </div>
  );
};
