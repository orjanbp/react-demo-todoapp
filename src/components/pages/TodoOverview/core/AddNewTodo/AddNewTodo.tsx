import React from 'react';
import styled from 'styled-components';
import { NameField } from '@/components/shared/Form/NameField';
import { DescriptionField } from '@/components/shared/Form/DescriptionField';
import { BoxButton } from '@/components/shared/Button/BoxButton';

const Container = styled.div`
  background-color: #FFF;
  color: #222;
  border-radius: 3px;
  padding: 16px 16px;
`;

export const AddNewTodo = () => {

  return (
    <Container>
      <NameField name="new-todo-name" />
      <DescriptionField name="new-todo-description" />
      <div>
        <BoxButton text="Add task" />
      </div>
    </Container>
  );
};
