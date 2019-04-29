import React from 'react';
import { Typography } from '@material-ui/core';
import Utility from '../../../services/Utility';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from './../../UIC/KButtonSmall';
import { Link } from 'react-router-dom';

const styles = theme => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cover: {
        width: 150,
        height: 150,
        margin: theme.spacing.unit * 1.1,
        borderRadius: 5,
    },
    link: {
        textDecoration: 'none',
        fontStyle: 'normal',
        outline: 'none',
    }
});

const ContestFeedItem = props => {
    const { classes, edition } = props;
    return (
        <div className={classes.item}>
            <Typography color="textSecondary">{edition.slogan}</Typography>
            <img src={Utility.getPath(edition.coverImage)} className={classes.cover} />
            <Link to="/contest/sctage/guide"  className={classes.link}> <KButtonSmall label="Enter Contest" /></Link>
        </div>
    )
}

export default withStyles(styles)(ContestFeedItem);