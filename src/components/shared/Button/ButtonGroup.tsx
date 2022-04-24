import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  paddingTop?: string;
  alignRight: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: ${props => props.alignRight && 'flex-end'};
  padding-top: ${props => props.paddingTop};
  & button + button {
    margin-left: 16px;
  }
`;

interface Props extends PropsWithChildren<{}> {
  paddingTop?: string;
  alignRight?: boolean;
}
export const ButtonGroup = ({ children, paddingTop, alignRight = false }: Props) => (
  <Wrapper paddingTop={paddingTop} alignRight={alignRight}>
    {children}
  </Wrapper>
);
