import * as types from './actionTypes';

const addPostIds = postIds => ({
    type: types.ME_ADD_POST_IDS,
    postIds,
});

const addCommentIds = commentIds => ({
    type: types.ME_ADD_COMMENT_IDS,
    commentIds,
});

const appendPostId = postId => ({
    type: types.ME_APPEND_POST_ID,
    postId,
});

const appendCommentId = commentId => ({
    type: types.ME_APPEND_COMMENT_ID,
    commentId,
}) 

function setDefault() {
    return dispatch => {
        dispatch(addPostIds([]));
        dispatch(addCommentIds([]));
    }
}

const meActions = {
    addPostIds,
    addCommentIds,
    setDefault,
    appendCommentId,
    appendPostId,
};

export default meActions;