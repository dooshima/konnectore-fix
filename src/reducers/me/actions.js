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
});

const popPostId = postId => ({
    type: types.ME_POP_POST_ID,
    postId,
});

const clearPostIds = postIds => ({
    type: types.ME_CLEAR_POST_IDS,
    postIds,
});

const clearCommentIds = commentIds => ({
    type: types.ME_CLEAR_COMMENT_IDS,
    commentIds,
});

function setDefault() {
    return dispatch => {
        dispatch(clearPostIds([]));
        dispatch(clearCommentIds([]));
    }
}

const meActions = {
    addPostIds,
    addCommentIds,
    setDefault,
    appendCommentId,
    appendPostId,
    popPostId,
};

export default meActions;