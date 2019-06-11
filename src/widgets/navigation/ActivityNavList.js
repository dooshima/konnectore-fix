import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const theme = createMuiTheme({

});

const useStyles = makeStyles({
    link: {
        color: '#0000008a',
        cursor: 'pointer',
        textDecoration: 'none',
        fontStyle: 'normal',
        '&:focus, &:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontStyle: 'normal',
        }
    },
    listText: {
        paddingLeft: 0,
    }
})

function ActivityNavList ()
{
    const classes = useStyles();
    return (
        <List dense={true}>
            <ListItem>
                <ListItemIcon>
                <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                className={classes.listText}
                primary={
                        <Link to="/me/account/contests" className={classes.link}>Contests</Link>
                }
                //secondary={secondary ? 'Secondary text' : null}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                primary={
                    <Link to="/me/account/liked-posts" className={classes.link}>Liked Posts</Link>
                }
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText
                primary={
                    <Link to="/me/account/wallet" className={classes.link}>Wallet</Link>
                }
                />
            </ListItem>
        </List>
    )
}

export default ActivityNavList;