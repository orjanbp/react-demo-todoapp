import React, {
  createContext, PropsWithChildren, useContext, useState
} from 'react';
import { TodoList } from '@/utils/types';

const initialTodos: TodoList = [
  { name: 'First todo item' },
  { name: 'Second todo item' }
];

const TodoStoreContext = createContext([] as TodoList);

export const TodoStoreProvider = ({ children }: PropsWithChildren<{}>) => {
  const [todoList, setTodoList] = useState(initialTodos);

  return (
    <TodoStoreContext.Provider value={todoList}>
      {children}
    </TodoStoreContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoStoreContext) as TodoList;
