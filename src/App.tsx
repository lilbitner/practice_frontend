import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Atoms/Title'
import AccountHeader from './components/Molecules/AccountHeader'
import DescriptorBar from './components/Organisms/DescriptorBar'
import Grid from './components/Organisms/Grid'
import GridContainer from './components/Organisms/GridContent'
import FinancialInterface from './interfaces/IFinancialInfo'


 const App = () : JSX.Element => {

  // interface financialInformation {
  //   totalAssets: string,
  //   ytdReturn: string, 
  //   lifetimeReturn: string,
  //   averageExposure: string
  // }

  const [financialInformation, updateFinancialInformation]= useState([])


  const [title, updateTitle] = useState("")
  // const [totalAssets, updateTotalAssets] = useState("")
  // const [ytdReturn, updateYtdReturn] = useState("")
  // const [lifetimeReturn, updateLifetimeReturn] = useState("")
  // const [averageExposure, updateAverageExposure] = useState("")

  const [accountTitle, updateAccountTitle] = useState('Account Summary')
  const [descriptorObjects, updateDescriptorObject] = useState([
    {descriptorTitle: 'Total Assets', value: financialInformation.totalAssets}, {descriptorTitle: 'YTD Return', value: financialInformation.ytdReturn}, 
    {descriptorTitle:'Lifetime Return', value: financialInformation.lifetimeReturn }, {descriptorTitle: 'Average Exposure', value: financialInformation.averageExposure }
  ])
 

  const [clientInformation, updateClientInformation] = useState([])
  // const [individualAccountTitle, updateIndividualAccountTitle] = useState("")
  // const [numberOfPortfolios, updatenumberOfPortfolios] = useState("")
  // const [accountMoney, updateAccountMoney] = useState("")
  // const [accountMoneyChange, updateAccountMoneyChange] = useState("")

   useEffect(() => {
      fetch('http://localhost:4000/title/Lillian', {
        method: "GET",
        headers: {
          'Content-Type': `application/json`
        }
        })
        .then(response => response.json())
        .then(response  => {
           return updateTitle(response)
      })
      fetch('http://localhost:4000/advisorinfo', {
        method: "GET",
        headers: {
          'Content-Type': `talagentrequest`
        }
        })
        .then(response => response.json())
        .then(response  => {
          return (updateFinancialInformation(response))
          // return (updateTotalAssets(response.totalAssets),
          // updateYtdReturn(response.ytd_return),
          // updateLifetimeReturn(response.lifetime_return),
          // updateAverageExposure(response.average_exposure))
      })
      fetch('http://localhost:4000/clientinfo', {
        method: "GET",
        headers: {
          'Content-Type': `application/json`
        }
        })
        .then(response => response.json())
        .then(response  => {
          return (updateClientInformation(response))
          // return (updateIndividualAccountTitle(response.client_name),
          // updatenumberOfPortfolios(response.number_of_portfolios),
          // updateAccountMoney(response.assets),
          // updateAccountMoneyChange(response.asset_deviation))
      })
    }
    )

    return (
      <div className="app">
        <Title title={title} />
        <AccountHeader title={accountTitle}/>
        <DescriptorBar descriptorObjects={descriptorObjects}/>
        <Grid clientInfo={clientInformation} />
      </div>
    );
}

export default App
