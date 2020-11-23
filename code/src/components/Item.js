import React from 'react';
import styled from 'styled-components';


const Container = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: #3f3f3f;
  background-color: red;
`;

export const Item = ({ item }) => {
  return <Container>{item.text}</Container>
};  