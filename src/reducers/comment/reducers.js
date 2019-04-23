import { combineReducers } from 'redux';
import * as types from './actionTypes';
import addCommentsReducer from './reducers/addCommentsReducer';
import addCommentReducer from './reducers/addCommentReducer';

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