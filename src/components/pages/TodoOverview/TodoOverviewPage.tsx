import React from 'react';
import styled from 'styled-components';
import { useTodoStore } from '@/store/TodoStore';
import { TodoItem } from '@/components/shared/TodoItem/TodoItem';

const Container = styled.div`
  padding: 32px;
`;

export const TodoOverviewPage = () => {
  const todoData = useTodoStore();

  console.log(todoData);

  return (
    <Container>
      {todoData.map(todo => (
        <TodoItem item={todo} />
      ))}
    </Container>
  );
};
