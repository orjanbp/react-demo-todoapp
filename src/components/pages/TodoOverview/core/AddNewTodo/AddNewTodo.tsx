import React, { useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { NameField } from '@/components/shared/Form/NameField';
import { DescriptionField } from '@/components/shared/Form/DescriptionField';
import { BoxButton } from '@/components/shared/Button/BoxButton';
import { ButtonGroup } from '@/components/shared/Button/ButtonGroup';
import { TodoItemType } from '@/utils/types';

const Container = styled.div`
  background-color: #FFF;
  color: #222;
  border-radius: 3px;
  padding: 16px 16px;
`;

export const AddNewTodo = () => {
  const [newTodo, setNewTodo] = useState<TodoItemType>({ name: '', description: '' });

  const handleChangeName = debounce((name: string) => {
    setNewTodo({ ...newTodo, name });
  }, 200);

  const handleChangeDescription = debounce((name: string) => {
    setNewTodo({ ...newTodo, name });
  }, 200);
  
  console.log(newTodo);

  return (
    <Container>
      <NameField name="new-todo-name" onChange={handleChangeName} />
      <DescriptionField name="new-todo-description" onChange={handleChangeDescription} />
      <ButtonGroup paddingTop="16px">
        <BoxButton text="Add task" />
        <BoxButton text="Cancel" variant="secondary" />
      </ButtonGroup>
    </Container>
  );
};
