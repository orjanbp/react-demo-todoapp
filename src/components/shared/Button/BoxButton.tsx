import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariants = 'primary' | 'secondary';

const StyledButton = styled.button<{ variant: ButtonVariants }>`
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
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.background};
  `}
  ${props => props.variant === 'secondary' && css`
    background-color: ${props => props.theme.color.background};
    border: 1px solid ${props => props.theme.color.border}
  `}
`;

interface Props {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariants;
}
export const BoxButton = ({ text, onClick, variant = 'primary' }: Props) => (
  <StyledButton onClick={onClick} variant={variant}>
    {text}
  </StyledButton>
);
