import * as types from './actionTypes';
import { combineReducers } from 'redux';
import addFollowingsReducer from './reduction/addFollowingsReducer';
import addFollowersReducer from './reduction/addFollowersReducer';

const followers = (followers=false, action) => {
    switch(action.type) {
        case types.FRIEND_ADD_FOLLOWERS:
            return addFollowersReducer(followers, action);
        default:
            return followers;
    }
};

const followings = (followings=false, action) => {
    switch(action.type) {
        case types.FRIEND_ADD_FOLLOWINGS:
            return addFollowingsReducer(followings, action);
        default:
            return followings;
    }
};

const friendReducers = combineReducers({
    followers,
    followings
});

export default friendReducers;