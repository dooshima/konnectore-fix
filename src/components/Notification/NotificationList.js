import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import NotificationListItem from '../../widgets/notifications/NotificationListItem';
import Utility from '../../services/Utility';

const styles = theme => ({
    subheader: {
        textTransform: 'normal',
    }
});

function NotificationList(props) {
    const { classes, notifications } = props;
    let list = [];
    for(let i in notifications) {
        let item = notifications[i];
        if(Utility.isset(item)) {
            let fullName = Utility.isset(item.data) && Utility.isset(item.data.user)? item.data.author.firstname + " " + item.data.author.lastname: "";
            list.push({
                avatar: Utility.getAvatar(item.data.author.avatar),
                fullName: fullName,
                date: item.created_at,
                message: Utility.isset(item.message)? item.message: Utility.getNotificationMessage(item),
            });
        }
    }
    return (
        <KPaper>
            <List subheader={<ListSubheader>Sort by</ListSubheader>} style={{textAlign: 'right'}} className={classes.subheader}>
            {
            list.map( item =>
            <NotificationListItem item={item} />
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