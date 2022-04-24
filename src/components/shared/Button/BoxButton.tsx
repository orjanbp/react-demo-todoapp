import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariarnts = 'primary' | 'secondary';

const Container = styled.button<{ variant: ButtonVariarnts }>`
  display: flex;
  align-items: center;
  height: 38px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer; 
  ${props => props.variant === 'primary' && css`
    background-color: #FC5E70;
    color: #FFF;
  `}
  ${props => props.variant === 'secondary' && css`
    background-color: #FFF;
    border: 1px solid #
  `}
`;

interface Props {
  text: string;
  variant?: ButtonVariarnts;
}
export const BoxButton = ({ text, variant = 'primary' }: Props) => (
  <Container variant={variant}>
    {text}
  </Container>
);
