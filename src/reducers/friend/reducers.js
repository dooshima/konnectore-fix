import * as types from './actionTypes';
import { combineReducers } from 'redux';
import addFriendsReducer from './reduction/addFriendsReducer';
import updateFriendsReducer from './reduction/updateFriendsReducer';

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

const friendReducers = combineReducers({
    friends,
});

export default friendReducers;