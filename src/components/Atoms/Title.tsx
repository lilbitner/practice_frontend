import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  position: absolute;
  width: 205px;
  height: 22px;
  left: 87px;
  top: 66px;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;

export default function Title(props: { title: string }): JSX.Element {
  console.table(props);
  return <StyledTitle>{props.title}</StyledTitle>;
}
