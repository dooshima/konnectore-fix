import * as types from './actionTypes';

const addPostIds = postIds => ({
    type: types.ME_ADD_POST_IDS,
    postIds,
});

const addCommentIds = commentIds => ({
    type: types.ME_ADD_COMMENT_IDS,
    commentIds,
});

const meActions = {
    addPostIds,
    addCommentIds,
};

export default meActions;