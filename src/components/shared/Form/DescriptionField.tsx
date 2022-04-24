import React, { useState } from 'react';
import styled from 'styled-components';

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
  border: none;
  resize: none;
  overflow: hidden;
`;

interface Props {
  name: string;
}
export const DescriptionField = ({ name }: Props) => {
  const [ghost, setGhost] = useState('');
  return (
    <GrowWrap data-ghost={ghost}>
      <StyledField
        name={name}
        placeholder="Description"
        onInput={evt => setGhost(evt.currentTarget.value)}
      />
    </GrowWrap>
  );
};
