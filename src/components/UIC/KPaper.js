import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
    shadow: {
        boxShadow: '-1px 2px 8px -4px rgba(165,165,165,1)',
    }
})
const KPaper = props => {
    const { classes } = props;
    return (
        <Paper {...props} className={classes.shadow} elevation={0} square={props.square === false? false: true}>
            {props.children}
        </Paper>
    )
};

export default withStyles(styles)(KPaper);