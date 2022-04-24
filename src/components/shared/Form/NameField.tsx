import React, { FunctionComponent as FC } from 'react';
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
  onChange: (val: string) => void;
}
export const NameField: FC<Props> = ({ name, onChange }) => (
  <StyledField
    type="text"
    placeholder="Task name"
    name={name}
    onChange={evt => onChange(evt.currentTarget.value)}
  />
);
