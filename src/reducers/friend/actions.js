import * as types from './actionTypes';
import appActions from '../app/actions';
import Friend from '../../services/Friend/Friend';
import postActions from '../post/actions';

const addFriends = friends => ({
   type: types.FRIEND_ADD_FRIENDS,
   friends,
});

const updateFriends = friend => ({
    type: types.FRIEND_UPDATE_FRIENDS,
    friend,
});

const addPostIds = postIds => ({
    type: types.FRIEND_ADD_POST_IDS,
    postIds,
})
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
                if(!response.error) {
                    dispatch(setFriend(response.data));
                    const posts = extractPosts(response.data.posts);
                    const byId = posts !== null && typeof(posts) !== 'undefined'? posts.byId: {};
                    const ids = posts !== null && typeof(posts) !== 'undefined'? posts.allIds: [];
                    dispatch(postActions.addPosts(byId));
                    dispatch(addPostIds(ids));
                }
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } );
    }
}

function extractPosts(postData) {

    const { byId, allIds } = postData.data;
    let posts = postData;
    delete posts['data'];
    posts['byId'] = byId;
    posts['allIds'] = allIds;

    return posts;
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