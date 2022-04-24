import React, { FunctionComponent as FC, useEffect, useState } from 'react';
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
  value?: string;
  onChange: (val: string) => void;
}
export const NameField: FC<Props> = ({ name, value = '', onChange }) => (
  <StyledField
    type="text"
    placeholder="Task name"
    name={name}
    value={value}
    onChange={evt => onChange(evt.currentTarget.value)}
  />
);
