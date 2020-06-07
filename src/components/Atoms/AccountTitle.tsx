import React from 'react'
import styled from 'styled-components'

export const AccountTitleStyled = styled.h2 `
  position: absolute;
  width: 282px;
  height: 22px;
  left: 88px;
  top: 150px;
  font-family: Helvetica Neue;
  // font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 22px;
`; 



export default function Title(props: { title: string }): JSX.Element {
  return(
      <AccountTitleStyled>{props.title}</AccountTitleStyled>
  )
}