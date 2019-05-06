import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';

const styles = theme => ({
    subheader: {
        textTransform: 'normal',
    },
    message: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    date: {
        textAlign: 'right',
    },
    item: {
        borderTop: '1px solid #efefef',
    }
});

function InboxSenderList(props) {
    const { classes } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>Sort by</ListSubheader>} style={{textAlign: 'right'}} className={classes.subheader}>
            {
            [...Array(10).keys()].map( i =>
            <ListItem className={classes.item}>
                <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <React.Fragment>
                            <Typography color="textSecondary" className={classes.message}>
                                Okay, thanks. I'll let you know when it's available.
                            </Typography>
                            <Typography color="textSecondary" className={classes.date}>10 seconds ago</Typography>
                        </React.Fragment>
                    } 
                />
            </ListItem>
            )
            }
            
            <ListItem>
                <Typography color="textSecondary" component="a" style={{flex: 1, textAlign: 'center'}}>SEE ALL</Typography>
            </ListItem>
            </List>
        </KPaper>
)
    }

InboxSenderList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InboxSenderList);