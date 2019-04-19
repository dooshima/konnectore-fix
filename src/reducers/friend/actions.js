import * as types from './actionTypes';
import appActions from '../app/actions';
import Friend from '../../services/Friend/Friend';

const addFriends = friends => ({
   type: types.FRIEND_ADD_FRIENDS,
   friends,
});

const updateFriends = friend => ({
    type: types.FRIEND_UPDATE_FRIENDS,
    friend,
});

const setFriend = current => ({
    type: types.FREIND_SET_FRIEND,
    current
});

const getFriends = token => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Friend.getFriends(token)
            .then( people => {
                dispatch(appActions.appIsLoading(false));
                dispatch(addFriends(people));
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            });
    }
}

const follow = (user, token) => {
    return dispatch => {
        Friend.follow(user, token)
            .then( friend => {
                dispatch(updateFriends(friend));
            } )
    }
}

const unfollow = (user, token) => {
    return dispatch => {
        Friend.unfollow(user, token)
            .then( friend => {
                dispatch(updateFriends(friend));
            } )
    }
}

function setDefault() {
    return dispatch => {
        dispatch(addFriends({}));
    }
}

const getFriend = (user_id, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        dispatch(setFriend({}));
        Friend.getFriend(user_id, token)
            .then( response => {
                console.log(response);
                dispatch(appActions.appIsLoading(false));
                if(!response.error)
                    dispatch(setFriend(response.data));
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } );
    }
}

const friendActions = {
    addFriends,
    getFriends,
    follow,
    updateFriends,
    setDefault,
    unfollow,
    setFriend,
    getFriend,
};

export default friendActions;