import { combineReducers } from 'redux';
import * as types from './actionTypes';
import addCommentsReducer from '../post/reduction/addCommentsReducer';
import addCommentReducer from '../post/reduction/addCommentReducer';

const byId = (comments={}, action) => {
    switch(action.type) {
        case types.COMMENT_ADD_COMMENTS:
            return addCommentsReducer(comments, action);
        case types.COMMENT_ADD_COMMENT:
            return addCommentReducer(comments, action);
        default:
            return comments;
    }
};

const commentReducers = combineReducers({
    byId,
});

export default commentReducers;