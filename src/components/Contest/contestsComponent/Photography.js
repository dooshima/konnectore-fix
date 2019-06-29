import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:60,
    margin:30,
  },
  papers: {
    margin: 'auto',
    maxWidth: 800,
  },
 
}));



export default function Photography() {
    const classes = useStyles();

  return (
   <div>
       <h1>Now Photo</h1>
   </div>
  );
}