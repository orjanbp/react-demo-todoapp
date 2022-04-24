import React from 'react';
import styled from 'styled-components';
import { NameField } from '@/components/shared/Form/NameField';
import { DescriptionField } from '@/components/shared/Form/DescriptionField';

const Container = styled.div`
  background-color: #FFF;
  color: #222;
  padding: 32px;
`;

export const AddNewTodo = () => {

  return (
    <Container>
      <NameField name="new-todo-name" />
      <DescriptionField name="new-todo-description" />
    </Container>
  );
};
