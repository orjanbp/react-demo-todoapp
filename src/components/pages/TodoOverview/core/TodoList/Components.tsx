import styled from 'styled-components';

/**
 * Apply spacing between subsequent todo items
 */
export const TodoList = styled.div`
  > div + div {
   margin-top: 8px;
 }
`;

export const ItemText = styled.div`
  padding: 12px;
`;

export const ItemName = styled.div`
  color: ${props => props.theme.color.textPrimary};
`;

export const ItemDesc = styled.div`
  color: ${props => props.theme.color.textSecondary};
  font-size: 1.3rem;
  margin-top: 4px;
`;
