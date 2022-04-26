import React from 'react';
import styled from 'styled-components';
import { TodoItemType } from '@/utils/types';
import { ItemDesc, ItemName, ItemText } from './Components';
import { CloseButton } from './CloseButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background100};
  color: ${props => props.theme.color.textPrimary};
  border-radius: 3px;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px #4e010133;
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