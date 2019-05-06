import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import NotificationListItem from '../../widgets/notifications/NotificationListItem';

const styles = theme => ({
    subheader: {
        textTransform: 'normal',
    }
});

function NotificationList(props) {
    const { classes } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>Sort by</ListSubheader>} style={{textAlign: 'right'}} className={classes.subheader}>
            {
            [...Array(10).keys()].map( i =>
            <NotificationListItem />
            )
            }
            
            <ListItem>
                <Typography color="textSecondary" component="a" style={{flex: 1, textAlign: 'center'}}>SEE ALL</Typography>
            </ListItem>
            </List>
        </KPaper>
)
    }

NotificationList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NotificationList);