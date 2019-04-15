import React from 'react';
import { Typography, withStyles, Avatar } from '@material-ui/core';
import KButtonSmall from '../KButtonSmall';


const styles = theme => ({
    item: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    }
})

const FriendConnectCard = props => {
    const { classes, person, handleFollow, user } = props;
    if(!person.profile) {
        return null;
    }
    const fullName = person.profile.firstname + " " + person.profile.lastname;
    const src = person.profile.avatar? person.profile.avatar: "/images/avatar.png";
    const active = person.type === 1? false: true; 
    return (
        <div className={classes.item}>
            <Avatar alt={fullName} src={src} />
            <Typography style={{margin: '.6em auto'}}>{fullName}</Typography>
            {person.following < 1 ? <KButtonSmall label="Follow" 
                size="small" onClick={() => handleFollow(person.id)} />: 
                <Typography color="textSecondary">Following</Typography>}
        </div>
    )
}

export default withStyles(styles)(FriendConnectCard);