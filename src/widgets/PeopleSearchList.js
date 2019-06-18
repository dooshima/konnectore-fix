import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography, createMuiTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from '../KButtonSmall';
import KPaper from '../KPaper';
import Utility from '../../../services/Utility';

const theme = createMuiTheme({
    spacing: 10,
});

const styles = {
    personName: {
        margin: 20,
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
}
function PeopleSearchList(props) {
    const { classes, friends, handleFollow, handleUnfollow } = props;
    return (
                <List style={{textAlign: 'left'}} className={classes.root}>
                {
                    friends.map( (friend, index) => 
                    <ListItem key={index}>
                    <Avatar alt={Utility.person(friend).fullName} src={Utility.person(friend).avatar} />
                    <ListItemText className={classes.personName} primary={Utility.person(friend).fullName} 
                        secondary={
                            friend.following < 1 ? <KButtonSmall label="Follow" 
                    size="small" onClick={() => handleFollow(friend.id)} />: 
                    <KButtonSmall label="Unfollow" collor="secondary"
                    size="small" onClick={() => handleUnfollow(friend.id)} />}
                    /></ListItem>
                    )
                }
                </List>
)
    }

PeopleSearchList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PeopleSearchList);