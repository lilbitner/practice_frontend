import React, { useState } from 'react';
import styled from 'styled-components'

const StyledDownsideUpside = styled.h4`
  // display: flex;
  // flex-direction: column;
  font-size: 18px;
  font-family: Helvetica Neue;
  font-weight: normal; 
`; 


export default function DownsideUpside(): JSX.Element{
  
  return(
    <StyledDownsideUpside>Downside/Upside</StyledDownsideUpside>
  )
}