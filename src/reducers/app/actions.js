import * as types from './actionTypes';

const appIsLoading = isLoading => ({
   type: types.APP_IS_LOADING,
   isLoading ,
});

function setDefault() {
    return dispatch => {
        dispatch(appIsLoading(false));
    }
}

const appActions = {
    appIsLoading,
    setDefault,
};

export default appActions;