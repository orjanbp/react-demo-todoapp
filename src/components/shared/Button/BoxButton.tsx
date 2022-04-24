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
  transition: background-color 0.1s ease;
  &:active {
    transition: background-color 0s;
  }

  ${props => props.variant === 'primary' && css`
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.background};
    &:hover {
      background-color: ${props => props.theme.color.primaryLight};
    }
    &:active {
      background-color: ${props => props.theme.color.primaryDark};
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${props => props.theme.color.background};
    border: 1px solid ${props => props.theme.color.border};
    &:hover {
      background-color: ${props => props.theme.color.backgroundFlat};
    }
    &:active {
      background-color: ${props => props.theme.color.backgroundDark};
    }
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
