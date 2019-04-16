import * as types from './actionTypes';
import uploadCountReducer from './reduction/uploadCountReducer';
import { combineReducers } from 'redux';
import isUploadingReducer from './reduction/isUploadingReducer';
import entryFilePathReducer from './reduction/entryFilePathReducer';
import setContestDataReducer from './reduction/setContestDataReducer';
import addEntryReducer from './reduction/addEntryReducer';
import setContestFeedReducer from './reduction/setContestFeedReducer';

const uploadCount = (uploadCount=0, action) => {
    switch(action.type) {
        case types.CONTEST_UPLOAD_COUNT:
            return uploadCountReducer(uploadCount, action);
        default:
            return uploadCount;
    }
}

const isUploading = (isUploading=false, action) => {
    switch(action.type) {
        case types.CONTEST_IS_UPLOADING:
            return isUploadingReducer(isUploading, action);
        default:
            return isUploading;
    }
}

const entryFilePath = (entryFilePath="", action) => {
    switch(action.type) {
        case types.CONTEST_ENTRY_FILE_PATH:
            return entryFilePathReducer(entryFilePath, action);
        default:
            return entryFilePath;
    }
}

const data = (data={}, action) => {
    switch(action.type) {
        case types.CONTEST_SET_DATA:
            return setContestDataReducer(data, action);
        default:
            return data;
    }
}

const entry = (entry={}, action) => {
    switch(action.type) {
        case types.CONTEST_ADD_ENTRY:
            return addEntryReducer(entry, action);
        default:
            return entry;
    }
}

const feed = (feed=[], action) => {
    switch(action.type) {
        case types.CONTEST_SET_CONTEST_FEED:
            return setContestFeedReducer(feed, action);
        default:
            return feed;
    }
}

const contestReducers = combineReducers({
    uploadCount,
    isUploading,
    entryFilePath,
    data,
    entry,
    feed,
});

export default contestReducers;