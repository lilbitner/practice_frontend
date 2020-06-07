import React, { useState } from 'react';
import styled from 'styled-components'
import CallMadeIcon from '@material-ui/icons/CallMade';

const StyledAccountMoneyContainer = styled.div`
  // display: flex;
  flex-direction: column;
  align-items: center;
`; 

const StyledAccountMoney = styled.h5`
  font-size: 14px;
  font-family: Helvetica Neue;

`

const StyledAccountMoneyChange = styled.h5`
  background-color: lightgray;
  font-size: 14px;
  font-family: Helvetica Neue; 
  border-radius: 1rem;

`


export default function AccountMoney(props: any): JSX.Element{
  
  const [accountMoney, updateAccountMoney] = useState('$74,958')
  const [accountMoneyChange, updateAccountMoneyChange] = useState('44% $22K')
  
    return(
    <StyledAccountMoneyContainer>
      <StyledAccountMoney>{props.accountMoney}</StyledAccountMoney>
      <StyledAccountMoneyChange><CallMadeIcon fontSize='small'/>{props.accountMoneyChange}</StyledAccountMoneyChange>
    </StyledAccountMoneyContainer>
    )
}