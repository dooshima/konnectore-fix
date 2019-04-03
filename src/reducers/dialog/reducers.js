import * as types from './actionTypes';
import { combineReducers } from 'redux';
import showDMReducer from './reduction/showDMReducer';
import imageURLReducer from './reduction/imageURLReducer';
import formDataReducer from './reduction/formDataReducer';
import postTextReducer from './reduction/postTextReducer';
import postTextColorReducer from './reduction/postTextColorReducer';

const showDM = (showDM=false, action) => {
    switch(action.type) {
        case types.DIALOG_SHOW_DM:
            return showDMReducer(showDM, action);
        default:
            return showDM;
    }
}

const dataImageURL = (dataImageURL="", action) => {
    switch(action.type) {
        case types.DIALOG_DATA_IMAGE_URL:
            return imageURLReducer(dataImageURL, action);
        default:
            return dataImageURL;
    }
}

const formData = (formData={}, action) => {
    switch(action.type) {
        case types.DIALOG_SET_FORM_DATA:
            return formDataReducer(formData, action);
        default:
            return formData;
    }
}

const postText = (postText="", action) => {
    switch(action.type) {
        case types.DIALOG_POST_TEXT:
            return postTextReducer(postText, action);
        default:
            return postText;
    }
}

const postTextColor = (color="#ffb91b", action) => {
    switch(action.type) {
        case types.DIALOG_POST_TEXT_COLOR:
            return postTextColorReducer(color, action);
        default:
            return color;
    }
}

const dialogReducers = combineReducers({
    showDM,
    dataImageURL,
    formData,
    postText,
    postTextColor,
});

export default dialogReducers;