import React from 'react';
import styled from 'styled-components';
import { TodoItemType } from '@/utils/types';
import { TodoItemContainer, ItemDesc, ItemName, ItemText } from './Components';
import { CloseButton } from './CloseButton';

const Container = styled(TodoItemContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background100};
  border-radius: 3px;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.20);
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
    <ItemText>
      <ItemName>{item.name}</ItemName>
      {item.description && (
        <ItemDesc>{item.description}</ItemDesc>
      )}
    </ItemText>
    <CloseButton onClick={() => onClose(item)} />
  </Container>
);
