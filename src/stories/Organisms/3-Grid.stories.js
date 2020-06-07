import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridContent from '../../components/Organisms/GridContent'
// import GridContent from '../components/Molecules'

export default {
  title: 'Organisms/Grid',
  component: Grid,
};


export const Layout = () => <Grid direction='column' container  justify='flex-end'  spacing={1}><GridContent/></Grid>
