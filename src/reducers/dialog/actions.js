import * as types from './actionTypes';

const showDM1 = showDM => ({
   type: types.DIALOG_SHOW_DM,
   showDM 
});

const toggleDM = showDM => {
    return dispatch => {
        dispatch(showDM1(showDM));
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
})

const dialogActions = {
    showDM1,
    toggleDM,
    setDataImageURL,
    setFormData,
    setPostText,
    setPostTextColor,
};

export default dialogActions;