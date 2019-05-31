import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    
  },
  paper: {
    padding: theme.spacing(2, 4),
    backgroundColor: '#F4F4F4',
  },
  link: {
    textDecoration: 'none',
    fontStyle: 'normal',
    cursor: 'pointer',
    color: '#000000',
  }
}));

function handleClick(event) {
  event.preventDefault();
}

function MetaBreadcrumbs({links}) {
  const classes = useStyles();
  const llink = links.pop();
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
          {
            links.map( link =>  <Link className={classes.link} color="inherit" to={link.route} onClick={handleClick}>
            {link.label}
          </Link>)
          }
          <Typography color="textSecondary">{llink.label}</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}

export default MetaBreadcrumbs;
