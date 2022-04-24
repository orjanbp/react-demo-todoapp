import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Header = () => (
  <HeaderBar>
    Todo App
  </HeaderBar>
);
