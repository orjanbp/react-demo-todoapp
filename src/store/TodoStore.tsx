import React, {
  createContext, PropsWithChildren, useContext, useState
} from 'react';
import { TodoItemType, TodoList } from '@/utils/types';

interface TodoStoreType {
  todoList: TodoList;
  addNewTodo: (newTodo: TodoItemType) => void;
  removeTodo: (removeTodo: TodoItemType) => void;
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

  const removeTodo = (removeTodo: TodoItemType) => {
    const trimmed = [removeTodo, ...todoList];
    setTodoList(trimmed);
  }

  const value = { todoList, addNewTodo, removeTodo };

  return (
    <TodoStoreContext.Provider value={value}>
      {children}
    </TodoStoreContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoStoreContext) as TodoStoreType;
