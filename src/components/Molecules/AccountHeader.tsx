import React from 'react'
import AccountTitle from '../Atoms/AccountTitle'
import Button from '../Atoms/Button'
import { Title } from '../../interfaces/IAccountHeader'


export default class AccountHeader extends React.Component<Title>{

  render() {
    return(
      <>
        <AccountTitle title={this.props.title}/>
        <Button/>
      </>
    )
  }
}
