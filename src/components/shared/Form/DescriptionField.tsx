import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

const GrowWrap = styled.div`
  display: grid;
  &:after {
    content: attr(data-ghost) " ";
    grid-area: 1 / 1 / 2 / 2;
    white-space: pre-wrap;
    visibility: hidden;
    font-size: 1.6rem;
    padding: 6px;
    margin: 2px;
    border: none;
  }
`;

const StyledField = styled.textarea`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  font-size: 1.6rem;
  padding: 6px;
  margin: 2px;
  border-radius: 3px;
  border: none;
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
`;

interface Props {
  name: string;
  value?: string;
  onChange: (val: string) => void;
}
export const DescriptionField = ({ name, value = '', onChange }: Props) => {
  const [ghost, setGhost] = useState('');
  return (
    <GrowWrap data-ghost={ghost}>
      <StyledField
        name={name}
        value={value}
        placeholder="Description"
        onInput={evt => setGhost(evt.currentTarget.value)}
        onChange={evt => onChange(evt.currentTarget.value)}
      />
    </GrowWrap>
  );
};
