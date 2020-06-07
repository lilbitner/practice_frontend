
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import AccountMoney from '../Molecules/AccountMoney'
import GridContent from '../Organisms/GridContent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'solid',
    width: '250%',
    marginLeft: '5rem'
  },
}));

export default function NestedGrid(props: any): JSX.Element {
  const classes = useStyles();
 

  function FormRow() :JSX.Element {
    return (
      <React.Fragment>
        <Grid item lg={1}>
          <Paper className={classes.paper}>
           <GridContent accountTitle={props.individualAccountTitle} portfolio={props.numberOfPortfolios} accountMoney={props.accountMoney}
        accountMoneyChange={props.accountMoneyChange}/>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid direction='column' container  justify='flex-end'  spacing={1}>
        <Grid container item xs={1} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={1} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={1} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}