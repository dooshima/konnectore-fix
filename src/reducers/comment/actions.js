import * as types from './actionTypes';

const addComments = comments => ({
    type: types.COMMENT_ADD_COMMENTS,
    comments,
});

const addComment = comment => ({
    type: types.COMMENT_ADD_COMMENT,
    comment,
});

function setDefault() {
    return dispatch => {
        dispatch(addComment({}));
        dispatch(addComments({}));
    }
}

const commentActions = {
    addComment,
    addComments,
    setDefault,
};


export default commentActions;