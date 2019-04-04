import React from 'react';
import { Typography, withStyles, Avatar } from '@material-ui/core';
import KButtonSmall from '../UIC/KButtonSmall';

const styles = theme => ({
    item: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    }
})

const PersonConnectCard = props => {
    const { classes } = props;
    return (
        <div className={classes.item}>
            <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
            <Typography style={{margin: '.6em auto'}}>Ademide Lawal</Typography>
            <KButtonSmall label="Follow" size="small" />
        </div>
    )

}

export default withStyles(styles)(PersonConnectCard);