import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ alignRight: boolean }>`
  display: flex;
  justify-content: ${props => props.alignRight && 'flex-end'};
  & button + button {
    margin-left: 16px;
  }
`;

interface Props extends PropsWithChildren<{}> {
  alignRight?: boolean;
}
export const ButtonGroup = ({ children, alignRight = false }: Props) => (
  <Wrapper alignRight={alignRight}>
    {children}
  </Wrapper>
);
