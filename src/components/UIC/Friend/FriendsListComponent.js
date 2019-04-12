import React from 'react';
import FriendConnectCard from './FriendConnectCard';
import KPaper from '../KPaper';
import { withStyles } from '@material-ui/core/styles';
import FriendHeaderNav from './FriendHeaderNav';

const styles = theme =>({
    list: {
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
    }
})

const FriendsListComponent = ({people, handleFollow, classes}) => {

    if(people) {
        const friendsList = people.map( person => <FriendConnectCard person={person} handleFollow={handleFollow} />);
        return (
            <>
            <FriendHeaderNav />
            <KPaper className={classes.list}>
                {friendsList}
            </KPaper>
            </>
        )
    } else {
        return null;
    }

};

export default withStyles(styles)(FriendsListComponent);