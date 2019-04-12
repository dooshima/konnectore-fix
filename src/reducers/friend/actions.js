import * as types from './actionTypes';
import appActions from '../app/actions';
import Friend from '../../services/Friend/Friend';

const addFollowers = followers => ({
   type: types.FRIEND_ADD_FOLLOWERS,
   followers,
});

const addFollowings = followings => ({
    type: types.FRIEND_ADD_FOLLOWINGS,
    followings,
});

const getFriends = token => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Friend.getFriends(token)
            .then( people => {
                dispatch(appActions.appIsLoading(false));
                dispatch(addFollowers(people.followers));
                dispatch(addFollowings(people.followings));
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            });
    }
}

const follow = (user_id, token) => {
    return dispatch => {
        Friend.follow(user_id, token)
            .then( friend => {
                console.log(friend);
            } )
    }
}

const friendActions = {
    addFollowers,
    addFollowings,
    getFriends,
    follow,
};

export default friendActions;