import React from 'react';
import { TodoItemType } from '@/utils/types';

interface Props {
  item: TodoItemType;
}
export const TodoItem = ({ item }: Props) => {
  const hello = 'world';
  return (
    <div>{item.name}</div>
  );
};
