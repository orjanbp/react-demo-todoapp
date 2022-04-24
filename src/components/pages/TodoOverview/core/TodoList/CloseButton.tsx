import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer; 
  transition: background-color 0.1s ease;
  &:active {
    transition: background-color 0s;
  }
  &:hover {
    background-color: ${props => props.theme.color.background60};
  }
  &:active {
    background-color: ${props => props.theme.color.background40};
  }
`;

interface Props {
  onClick?: () => void;
}
export const CloseButton = ({ onClick }: Props) => (
  <Container onClick={onClick}>
    <MdClose />
  </Container>
);
