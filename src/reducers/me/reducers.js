import * as types from './actionTypes';
import { combineReducers } from 'redux';
import addPostIdsReducer from './reducers/addPostIdsReducer';
import addCommentIdsReducer from './reducers/addCommentIdsReducer';

const postIds = (postIds=[], action) => {
    switch(action.type) {
        case types.ME_ADD_POST_IDS:
            return addPostIdsReducer(postIds, action);
        default:
            return postIds;
    }
};

const commentIds = (commentIds=[], action) => {
    switch(action.type) {
        case types.ME_ADD_COMMENT_IDS:
            return addCommentIdsReducer(commentIds, action);
        default:
            return commentIds;
    }
};

const meReducers = combineReducers({
    postIds,
    commentIds,
});

export default meReducers;
