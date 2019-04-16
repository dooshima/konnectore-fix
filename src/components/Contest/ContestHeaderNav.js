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
        marginLeft: 50,
    }
})
const ContestHeaderNav = props => {
    const { classes, title, back } = props;
    return (
        <Toolbar className={classes.toolbar}>
            <Link to={back} className={classes.link}>
                <IconButton className={classes.iconButton}>
                    <ArrowBackIosIcon className={classes.icon} />               
                </IconButton>
            </Link>
            <Link to={back} className={classes.link}>
                <Typography className={classes.back}>
                    Back
                </Typography>
            </Link>
            
            <Typography component="h4" color="textSecondary" className={classes.h4}>{title}</Typography>
        </Toolbar>
    )
}

export default withStyles(styles)(ContestHeaderNav);