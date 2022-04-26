import React from 'react';
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
  transition: background-color 0.1s ease, opacity 0.2s ease;
  &:active {
    transition: background-color 0s;
  }
  ${props => props.disabled && css`  
      pointer-events: none;
      cursor: default;
      opacity: 0.5;
  `}

  ${props => props.variant === 'primary' && css`
    background-color: ${props => props.theme.color.primary80};
    color: ${props => props.theme.color.background100};
    &:hover {
      background-color: ${props => props.theme.color.primary100};
    }
    &:active {
      background-color: ${props => props.theme.color.primary60};
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${props => props.theme.color.background100};
    border: 1px solid ${props => props.theme.color.border};
    &:hover {
      background-color: ${props => props.theme.color.background80};
    }
    &:active {
      background-color: ${props => props.theme.color.background60};
    }
  `}
`;

interface Props {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariants;
  disabled?: boolean;
}
export const BoxButton = ({ text, onClick, variant = 'primary', disabled }: Props) => (
  <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
    {text}
  </StyledButton>
);
