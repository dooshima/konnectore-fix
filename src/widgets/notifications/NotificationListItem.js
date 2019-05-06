import React from 'react';
import KCard from '../../components/UIC/KCard';
import { Button, Avatar, ListItem, Typography, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from './../../components/UIC/KButtonSmall';

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
            const { classes } = this.props;
            return (
                <KCard>
                    <ListItem className={classes.item}>
                        <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                        <ListItemText primary="Ademide Lawal" 
                            secondary={
                                <div className={classes.row}>
                                    <div>
                                        <Typography color="textSecondary" className={classes.message}>
                                            Okay, thanks. I'll let you know when it's available.
                                        </Typography>
                                        <Typography color="textSecondary" className={classes.time}>40 mins ago</Typography>
                                    </div>
                                    <KButtonSmall label="Follow back" />
                                </div>
                            } 
                        />
                    </ListItem>
                </KCard>
            )
        }
}

export default withStyles(styles)(NotificationListItem);