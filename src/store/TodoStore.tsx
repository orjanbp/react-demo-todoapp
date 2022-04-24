import React, {
  createContext, PropsWithChildren, useContext, useState
} from 'react';
import { TodoItemType, TodoList } from '@/utils/types';

interface TodoStoreType {
  todoList: TodoList;
  addNewTodo: (newTodo: TodoItemType) => void;
}

const initialTodos: TodoList = [
  { name: 'First todo item' },
  { name: 'Second todo item' }
];

const TodoStoreContext = createContext({} as TodoStoreType);

export const TodoStoreProvider = ({ children }: PropsWithChildren<{}>) => {
  const [todoList, setTodoList] = useState(initialTodos);

  const addNewTodo = (newTodo: TodoItemType) => {
    setTodoList([...todoList, newTodo]);
  }

  const value = { todoList, addNewTodo };

  return (
    <TodoStoreContext.Provider value={value}>
      {children}
    </TodoStoreContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoStoreContext) as TodoStoreType;
