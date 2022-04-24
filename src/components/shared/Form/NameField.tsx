import React from 'react';
import styled from 'styled-components';

const StyledField = styled.input`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 6px;
  border-radius: 3px;
  margin: 2px;
  border: none;
  box-sizing: border-box;
`;

interface Props {
  name: string;
}
export const NameField = ({ name }: Props) => (
  <StyledField type="text" name={name} placeholder="Task name" />
);
