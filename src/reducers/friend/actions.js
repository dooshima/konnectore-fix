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
})

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

const friendActions = {
    addFriends,
    getFriends,
    follow,
    updateFriends,

};

export default friendActions;