import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';


export default function Hook() {
     const classes = useStyles();
    return <Button className={classes.myButton} classes={{ label: 'addAccountButton'}} size='small' variant='contained'>Add Account</Button> 
}


const useStyles = makeStyles({
  myButton: {
    border: 2,
    background: 'gray',
    borderRadius: 3,
    boxShadow: '0px 0px 8px gray',
    color: 'white',
    height: '21px',
    width: '106px',
    left: '392px',
    top: '172px',
    fontFamily: 'Helvetica Neue',
    fontSize: '10px',
    fontStyle: 'regular',
    align: 'left'

  },
});