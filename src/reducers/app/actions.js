import * as types from './actionTypes';

const appIsLoading = isLoading => ({
   type: types.APP_IS_LOADING,
   isLoading ,
});

const operationComplete = operation => ({
    type: types.APP_OPERATION_COMPLETE,
    operation,
})

function setDefault() {
    return dispatch => {
        dispatch(appIsLoading(false));
    }
}

const appActions = {
    appIsLoading,
    operationComplete,
    setDefault,
};

export default appActions;