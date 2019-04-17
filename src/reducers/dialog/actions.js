import * as types from './actionTypes';

const showDialog = showDM => ({
   type: types.DIALOG_SHOW_DM,
   showDM 
});

const toggleDM = showDM => {
    return dispatch => {
        dispatch(showDialog(showDM));
    }
}

const setDataImageURL = dataImageURL => ({
    type: types.DIALOG_DATA_IMAGE_URL,
    dataImageURL,  
});

const setFormData = formData => ({
    type: types.DIALOG_SET_FORM_DATA,
    formData,
});

const setPostText = postText => ({
    type: types.DIALOG_POST_TEXT,
    postText,
});

const setPostTextColor = postTextColor => ({
    type: types.DIALOG_POST_TEXT_COLOR,
    postTextColor,
});

function setDefault() {
    return dispatch => {
        dispatch(showDialog(false));
        dispatch(setDataImageURL(""));
        dispatch(setFormData({}));
        dispatch(setPostText(""));
        dispatch(setPostTextColor("#ffb91b"));
    };
}

const dialogActions = {
    showDialog,
    toggleDM,
    setDataImageURL,
    setFormData,
    setPostText,
    setPostTextColor,
    setDefault,
};

export default dialogActions;