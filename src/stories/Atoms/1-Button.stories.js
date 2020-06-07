import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from '../../components/Atoms/Button'
import DeleteIcon from '@material-ui/icons/Delete';


export default {
  title: 'Atoms/Button',
  component: 'Button',
};

export const Add = () => <AddButton onClick={action('clicked')} >Add Account</AddButton>;


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
})); 

export const Delete = () => {
  const classes = useStyles();
  return <Button startIcon={<DeleteIcon/>}>Delete</Button>
} 

export const TryThisButton = ()=> <Button startIcon={<DeleteIcon />}>  Delete</Button>


