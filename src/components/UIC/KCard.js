import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const styles = theme => ({
    shadow: {
        boxShadow: '-1px 2px 8px -4px rgba(165,165,165,1)',
        display: 'flex',
        margin: theme.spacing.unit * 0,
        padding: 0,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    }
});
const KCard = props => {
    const { classes } = props;
    return (
        <Card {...props} className={classes.shadow} elevation={0} square={props.square === false? false: true}>
            {props.children}
        </Card>
    )
};

export default withStyles(styles)(KCard);