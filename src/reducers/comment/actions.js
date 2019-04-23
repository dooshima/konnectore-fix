import * as types from './actionTypes';

const addComments = comments => ({
    type: types.COMMENT_ADD_COMMENTS,
    comments,
});

const addComment = comment => ({
    type: types.COMMENT_ADD_COMMENT,
    comment,
});

const commentActions = {
    addComment,
    addComments,
};

export default commentActions;