import React from 'react';
import styled from 'styled-components';
import { useTodoStore } from '@/store/TodoStore';
import { TodoList, TodoListItem } from '@/components/shared/TodoList';

const Container = styled.div`
  padding: 32px;
`;


export const TodoOverviewPage = () => {
  const todoData = useTodoStore();

  console.log(todoData);

  return (
    <Container>
      <TodoList>
        {todoData.map(todo => (
          <TodoListItem item={todo} />
        ))}
      </TodoList>
    </Container>
  );
};
