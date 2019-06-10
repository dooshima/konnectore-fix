import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

})

class ActivityNavList extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const classes = useStyles();
        return (
            <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                        <ListItemText classes={{ primary: classes.primary }} inset primary={
                            <Link to="/me/account/notifications" className={classes.link}>Notifications</Link>
                        } />
                    }
                    //secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
        )
    }
}