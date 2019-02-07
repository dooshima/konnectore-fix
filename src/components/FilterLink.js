import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
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
        paddingLeft: 30,
        paddingRight: 30, 
        color: '#000000de',
        '&:hover': {
          fontStyle: 'normal',
          color: 'white',
          borderStyle: 'solid',
          borderColor: 'white',
          borderWidth: 2,
          backgroundColor: 'blue',
          paddingLeft: 30,
          paddingRight: 30,
        },
        '&:active': {
            fontStyle: 'normal',
            color: 'white',
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 2,
            backgroundColor: 'blue',
            paddingLeft: 30,
            paddingRight: 30,
          }
      },
});

const FilterLink = ({ filter, children, classes }) => (
    <RouterLink component={Link} to={filter} activeStyle={classes.active} className={classes.link}>
        {children}
    </RouterLink>
);

//export default FilterLink;
export default withStyles(styles)(FilterLink);