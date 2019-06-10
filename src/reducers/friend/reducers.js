import * as types from './actionTypes';
import { combineReducers } from 'redux';
import addFriendsReducer from './reduction/addFriendsReducer';
import updateFriendsReducer from './reduction/updateFriendsReducer';
import setFriendReducer from './reduction/setFriendReducer';
import addPostIdsReducer from './reduction/addPostIdsReducer';
import addToFriendsReducer from './reduction/addToFriendsReducer';
import growFriendsReducer from './reduction/growFriendsReducer';
import addFriendsByIdReducer from './reduction/addFriendsByIdReducer';
import addFriendIdsReducer from './reduction/addFriendIdsReducer';
import addToFriendsByIdReducer from './reduction/addToFriendsByIdReducer';

const friends = (friends=false, action) => {
    switch(action.type) {
        case types.FRIEND_ADD_FRIENDS:
            return addFriendsReducer(friends, action);
        case types.FRIEND_UPDATE_FRIENDS:
            return updateFriendsReducer(friends, action);
        case types.FRIEND_ADD_TO_FRIENDS:
            return addToFriendsReducer(friends, action);
        default:
            return friends;
    }
};

const byId = (byId={}, action) => {
    switch(action.type) {
        case types.FRIEND_ADD_FRIENDS_BYID:
            return addFriendsByIdReducer(byId, action);
        case types.FRIEND_ADD_TO_FRIENDS_BYID:
            return addToFriendsByIdReducer(byId, action);
        default:
            return byId;
    }
};

const allIds = (allIds={}, action) => {
    switch(action.type) {
        case types.FRIEND_ADD_FRIEND_IDS:
            return addFriendIdsReducer(allIds, action);
        default:
            return allIds;
    }
};

const current = (current={}, action) => {
    switch(action.type) {
        case types.FREIND_SET_FRIEND:
            return setFriendReducer(current, action);
        default:
            return current;
    }
}

const postIds = (postIds=[], action) => {
    switch(action.type) {
        case types.FRIEND_ADD_POST_IDS:
            return addPostIdsReducer(postIds, action);
        default:
            return postIds;
    }
};

const grow_friends = (grow_friends=[], action) => {
    switch(action.type) {
        case types.FRIEND_GROW_FRIENDS:
            return growFriendsReducer(grow_friends, action);
        default:
            return grow_friends;
    }
}

const friendReducers = combineReducers({
    friends,
    current,
    postIds,
    grow_friends,
    byId,
    allIds,
});

export default friendReducers;