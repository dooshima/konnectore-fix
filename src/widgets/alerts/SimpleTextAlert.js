import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    infoText: {
        fontSize: theme.typography.fontSize * 1.8,
        margin: 20,
        textAlign: 'center',
        color: '#0000008a',
    },
});

const SimpleTextAlert = ({classes, message}) => {
    return (
        <Typography className={classes.infoText}>{message}</Typography>
    )
};

export default withStyles(styles)(SimpleTextAlert);