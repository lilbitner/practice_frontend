import styled from 'styled-components'
import Grid from './Grid'
import React, { useState } from 'react';
import AccountMoney from '../Molecules/AccountMoney'
import IndividualAccountTitle from '../Molecules/IndividualAccountTitle'
import DownsideUpside from '../Molecules/Downside_Upside'

 

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  width: 80%;
`; 


export default function GridContainer(props: any) : JSX.Element {



  return(
    <StyledGridContainer>
      <IndividualAccountTitle portfolio={props.numberOfPortfolios} accountTitle={props.individualAccountTitle}/>
      <DownsideUpside/>
      <AccountMoney accountMoney={props.accountMoney} accountMoneyChange={props.accountMoneyChange}/>
    </StyledGridContainer>
  )
}