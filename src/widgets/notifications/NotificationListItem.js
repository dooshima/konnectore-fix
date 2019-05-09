import React from 'react';
import KCard from '../../components/UIC/KCard';
import { Button, Avatar, ListItem, Typography, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from './../../components/UIC/KButtonSmall';
import Utility from '../../services/Utility';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';

const styles = theme => ({
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.unit * 1,
        paddingLeft: 0,
    },
    item: {
        margin: theme.spacing.unit * 1,
    }
})
class NotificationListItem extends React.Component {
    constructor(props) {
        super(props);
    }
        render() {
            const { classes, item } = this.props;
            const avatar = item.avatar;
            const fullName = item.fullName; 
            const date = item.date;
            const message = item.message;
            return (
                <KCard>
                    <ListItem className={classes.item}>
                        <Avatar alt={fullName} src={Utility.getAvatar(avatar)} />
                        <ListItemText primary={fullName} 
                            secondary={
                                <div className={classes.row}>
                                    <div>
                                        <Typography color="textSecondary" className={classes.message}>
                                            {message}
                                        </Typography>
                                        <Typography color="textSecondary" className={classes.time}><ReactTimeAgo locale="en" date={new Date(date)} /></Typography>
                                    </div>
                                    {false && <KButtonSmall label="Follow back" />}
                                </div>
                            } 
                        />
                    </ListItem>
                </KCard>
            )
        }
}

export default withStyles(styles)(NotificationListItem);