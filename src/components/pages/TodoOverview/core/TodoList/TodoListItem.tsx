import React from 'react';
import styled from 'styled-components';
import { TodoItemType } from '@/utils/types';
import { TodoItemContainer, TodoItemText } from './Components';
import { CloseButton } from './CloseButton';

const Container = styled(TodoItemContainer)`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background100};
  color: #222;
  border-radius: 3px;
  /* padding: 16px 16px; */
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.color.background80};
  }
`;

interface Props {
  item: TodoItemType;
  onClose: (todoItem: TodoItemType) => void;
}
/**
 * Display a todo item as an element
 */
export const TodoListItem = ({ item, onClose }: Props) => (
  <Container>
    <TodoItemText>{item.name}</TodoItemText>
    <CloseButton onClick={() => onClose(item)} />
  </Container>
);
