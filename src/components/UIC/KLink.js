import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const dudUrl = 'javascript:;';

const styles = theme => ({
    active: {
        color: '#fefefe',
        backgroundColor: '#00927d',
    },
    link: {
        margin: theme.spacing.unit,
        textDecoration: 'none',
        color: '#808080',
        '&:hover': {
          fontStyle: 'normal',
        },
        '&:active': {
            fontStyle: 'normal',
        }
      },
});

const KLink = ({ filter, children, classes }) => (
    <RouterLink component="p" to={filter} activeStyle={{color: '#fefefe', backgroundColor: '#00927d'}} className={classes.link}>
        {children}
    </RouterLink>
);

export default withStyles(styles)(KLink);