import React from 'react';
import { Typography, withStyles, Avatar, createMuiTheme, ListItem, ListItemText } from '@material-ui/core';
//import KButtonSmall from '../KButtonSmall';
import { Link } from 'react-router-dom';
import KButtonSmall from '../../components/UIC/KButtonSmall';
import Utility from '../../services/Utility';

const theme = createMuiTheme({
    spacing: 10,
})

const styles = {
    item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        [theme.breakpoints.down('md')]: {
            width: '50%',
        }
    },
    link1: {
        textDecoration: 'none',
        fontStyle: 'normal',
        color: 'black',
        cursor: 'pointer',
        textAlign: 'center',
    },
    personName: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 20,
    }
};

const PersonSearchItem = props => {
    const { classes, person, handleFollow, handleUnfollow, user } = props;
    console.log(person);
    if(!person.profile) {
        return null;
    }
    const fullName = person.profile.firstname + " " + person.profile.lastname;
    const src = Utility.getAvatar(person.profile.avatar);
    const active = person.type === 1? false: true; 
    return (
        <ListItem>
            <Link to={`/people/${person.id}`}> <Avatar alt={Utility.person(person).fullName} src={Utility.person(person).avatar} /></Link>
            <ListItemText className={classes.personName} primary={
                <Link className={classes.link1} to={`/people/${person.id}`}>{Utility.person(person).fullName}</Link>}
                secondary={
                    person.following < 1 ? <KButtonSmall label="Follow" 
            size="small" onClick={() => handleFollow(person.id)} />: 
            <KButtonSmall label="Unfollow" collor="secondary"
            size="small" onClick={() => handleUnfollow(person.id)} />}
            />
        </ListItem>
    )
}

export default withStyles(styles)(PersonSearchItem);