import React from 'react';
import { Toolbar, IconButton, Typography, withStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const styles = theme => ({
    toolbar: {
        
    },
    link: {
        textDecoration: 'none',
    },
    back: {
        fontSize: 20,
        color: theme.palette.primary.main,
    },
    iconButton: {
        padding: 0,
    },
    icon: {
        fontSize: 20,
    },
    h4: {
        fontSize: 20,
        marginLeft: 20,
    }
})
const FriendHeaderNav = props => {
    const { classes } = props;
    return (
        <Toolbar className={classes.toolbar}>
            <Typography component="h4" className={classes.h4}>People</Typography>
        </Toolbar>
    )
}

export default withStyles(styles)(FriendHeaderNav);