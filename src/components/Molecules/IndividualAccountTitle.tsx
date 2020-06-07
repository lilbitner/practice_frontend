import React, {useState} from 'react'
import styled from 'styled-components'

const StyledIndividualAccountTitleContainer = styled.div`
  // display: flex;
  // flex-direction: column; 
  text-align: left;
`; 

const StyledTitle = styled.h4`
font-size: 18px;
font-family: Helvetica Neue;
font-weight: bold

`

const StyledPortfolioNumber = styled.h5`
font-size: 16px;
font-family: Helvetica Neue;
font-weight: lighter

`


export default function IndividualAccountTitle(props: any): JSX.Element{
  
  // const [individualAccountTitle, updateIndividualAccountTitle] = useState('University of California')
  // const [numberOfPortfolios, updatenumberOfPortfolios] = useState('3 Portfolios')
  
    return(
    <StyledIndividualAccountTitleContainer>
      <StyledTitle>{props.individualAccountTitle}</StyledTitle>
      <StyledPortfolioNumber>{props.numberOfPortfolios}</StyledPortfolioNumber>
    </StyledIndividualAccountTitleContainer>
    )
}