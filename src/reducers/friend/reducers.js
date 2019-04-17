import * as types from './actionTypes';
import { combineReducers } from 'redux';
import addFriendsReducer from './reduction/addFriendsReducer';
import updateFriendsReducer from './reduction/updateFriendsReducer';
import setFriendReducer from './reduction/setFriendReducer';

const friends = (friends=false, action) => {
    switch(action.type) {
        case types.FRIEND_ADD_FRIENDS:
            return addFriendsReducer(friends, action);
        case types.FRIEND_UPDATE_FRIENDS:
            return updateFriendsReducer(friends, action);
        default:
            return friends;
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

const friendReducers = combineReducers({
    friends,
    current,
});

export default friendReducers;