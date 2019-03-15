import * as types from './actionTypes';

const appIsLoading = isLoading => ({
   type: types.APP_IS_LOADING,
   isLoading 
});

const appActions = {
    appIsLoading,
};

export default appActions;