import * as types from './actionTypes';
import { combineReducers } from 'redux';
import isUploadingReducer from './reduction/isUploadingReducer';
import progressNumberReducer from './reduction/progressNumberReducer';
import addPostsReducer from './reduction/addPostsReducer';
import addViewReducer from './reduction/addViewReducer';
import addLikeReducer from './reduction/addLikeReducer';
import updatePostCommentReducer from './reduction/updatePostCommentReducer';
import clearPostsReducer from './reduction/clearPostsReducer';
import addPostReducer from './reduction/addPostReducer';
import deletePostReducer from './reduction/deletePostReducer';

const progressNumber = (progressNumber=0, action) => {
    switch(action.type) {
        case types.POST_PROGRESS_NUMBER:
            return progressNumberReducer(progressNumber, action);
        default:
            return progressNumber;
    }
}

const byId = (posts={}, action) => {
    switch(action.type) {
        case types.POST_ADD_POSTS:
            return addPostsReducer(posts, action);
        case types.POST_VIEW_POST:
            return addViewReducer(posts, action);
        case types.POST_LIKE_POST:
            return addLikeReducer(posts, action);
        case types.POST_UPDATE_POST_COMMENT:
            return updatePostCommentReducer(posts, action);
        case types.POST_CLEAR_POST:
            return clearPostsReducer(posts, action);
        case types.POST_ADD_POST:
            return addPostReducer(posts, action);
        case types.POST_DELETE_POST:
            return deletePostReducer(posts, action);
        default:
            return posts;
    }
}

const isUploading = (isUploading=false, action) => {
    switch(action.type) {
        case types.POST_UPLOAD_MEDIA_STARTED:
            return isUploadingReducer(isUploading, action);
        default:
            return isUploading;
    }
}

const postReducers = combineReducers({
    progressNumber,
    isUploading,
    byId,
});

export default postReducers;