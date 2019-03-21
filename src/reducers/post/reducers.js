import * as types from './actionTypes';
import { combineReducers } from 'redux';
import isUploadingReducer from './reduction/isUploadingReducer';
import progressNumberReducer from './reduction/progressNumberReducer';
import postTextReducer from './reduction/postTextReducer';

const progressNumber = (progressNumber=0, action) => {
    switch(action.type) {
        case types.POST_PROGRESS_NUMBER:
            return progressNumberReducer(progressNumber, action);
        default:
            return progressNumber;
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
    isUploading
});

export default postReducers;