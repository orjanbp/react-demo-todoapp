import React, { useState } from 'react';
import styled from 'styled-components';
import { NameField } from '@/components/shared/Form/NameField';
import { DescriptionField } from '@/components/shared/Form/DescriptionField';
import { BoxButton } from '@/components/shared/Button/BoxButton';
import { ButtonGroup } from '@/components/shared/Button/ButtonGroup';
import { TodoItemType } from '@/utils/types';

const emptyTodo = { id: '', name: '', description: '' };

const Container = styled.div`
  background-color: #FFF;
  color: #222;
  border-radius: 3px;
  padding: 16px 16px;
`;

interface Props {
  onAddTodo: (newTodo: TodoItemType) => void;
}
export const AddNewTodo = ({ onAddTodo }: Props) => {
  const [newTodo, setNewTodo] = useState<TodoItemType>(emptyTodo);

  const handleChangeName = (name: string) => {
    setNewTodo({ ...newTodo, name });
  };

  const handleChangeDescription = (description: string) => {
    setNewTodo({ ...newTodo, description });
  };

  const handleSubmit = () => {
    // break if there is no name; the minimum requirement
    if (!newTodo.name) return;
    onAddTodo(newTodo);
    setNewTodo(emptyTodo);
  }

  return (
    <Container>
      <NameField name="new-todo-name" value={newTodo.name} onChange={handleChangeName} />
      <DescriptionField name="new-todo-description" value={newTodo.description} onChange={handleChangeDescription} />
      <ButtonGroup paddingTop="16px">
        <BoxButton text="Add task" onClick={handleSubmit} />
        <BoxButton text="Cancel" variant="secondary" />
      </ButtonGroup>
    </Container>
  );
};
