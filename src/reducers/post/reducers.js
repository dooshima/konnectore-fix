import * as types from './actionTypes';
import { combineReducers } from 'redux';
import isUploadingReducer from './reduction/isUploadingReducer';
import progressNumberReducer from './reduction/progressNumberReducer';
import addPostsReducer from './reduction/addPostsReducer';
import addViewReducer from './reduction/addViewReducer';
import addLikeReducer from './reduction/addLikeReducer';

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