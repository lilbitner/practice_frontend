import React from 'react';
import Title from '../../components/Atoms/Title'
import HeaderTitle from '../../components/Atoms/AccountTitle'


export default {
  title: 'Atoms/Title',
  component: Title,
};



export const Header = () => <HeaderTitle title='Next World Investments'/>

export const AccountTitle = () => <Title title="Account Summary"/>