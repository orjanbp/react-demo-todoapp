import React from 'react';
import styled from 'styled-components';
import { useTodoStore } from '@/store/TodoStore';
import { TodoList, TodoListItem } from '@/components/pages/TodoOverview/core/TodoList';
import { AddNewTodo } from './core/AddNewTodo/AddNewTodo';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: calc(100vh - 48px);
  padding: 32px;
  box-sizing: border-box;
`;


export const TodoOverviewPage = () => {
  const { todoList } = useTodoStore();

  console.log(todoList);

  return (
    <Container>
      <TodoList>
        {todoList.map(todo => (
          <TodoListItem item={todo} />
        ))}
      </TodoList>
      <AddNewTodo />
    </Container>
  );
};
