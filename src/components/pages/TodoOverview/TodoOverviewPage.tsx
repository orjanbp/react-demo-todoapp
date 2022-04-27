import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useTodoStore } from '@/store/TodoStore';
import { TodoList, TodoListItem } from '@/components/pages/TodoOverview/core/TodoList';
import { AnimFadeOnLoad } from '@/components/shared/Animations/AnimFadeOnLoad';
import { AddNewTodo } from './core/AddNewTodo/AddNewTodo';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  margin: auto;
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 48px);
  padding: 32px;
  box-sizing: border-box;
`;

export const TodoOverviewPage = () => {
  const { todoList, addNewTodo, removeTodo } = useTodoStore();

  console.log(todoList);

  return (
    <Container>
      <TodoList>
        <AnimatePresence>
          {todoList.map(todo => (
            <AnimFadeOnLoad>
              <TodoListItem item={todo} onClose={removeTodo} />
            </AnimFadeOnLoad>
          ))}
        </AnimatePresence>
      </TodoList>
      <AddNewTodo onAddTodo={addNewTodo} />
    </Container>
  );
};
