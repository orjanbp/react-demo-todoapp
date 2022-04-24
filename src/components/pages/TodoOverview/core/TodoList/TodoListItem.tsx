import React from 'react';
import styled from 'styled-components';
import { TodoItemType } from '@/utils/types';
import { TodoItemContainer } from './Components';

interface Props {
  item: TodoItemType;
}
/**
 * Display a todo item as an element
 */
export const TodoListItem = ({ item }: Props) => {
  const hello = 'world';
  return (
    <TodoItemContainer>{item.name}</TodoItemContainer>
  );
};
