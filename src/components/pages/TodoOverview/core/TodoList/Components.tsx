import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  background-color: #FFF;
  color: #222;
  border-radius: 3px;
  padding: 16px 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  &:hover {
    cursor: pointer;
    background-color: #F0F0F0;
  }
`;

export const TodoItemText = styled.div`
  padding: 12px;
`;

/**
 * Apply spacing between subsequent todo items
 */
export const TodoList = styled.div`
  ${TodoItemContainer} + ${TodoItemContainer} {
    margin-top: 8px;
  }
`;
