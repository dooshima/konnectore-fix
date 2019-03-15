import * as types from './actionTypes';
import appIsLoadingReducer from './reduction/appIsLoadingReducer';
import { combineReducers } from 'redux';

const isLoading = (isLoading=false, action) => {
    switch(action.type) {
        case types.APP_IS_LOADING:
            return appIsLoadingReducer(isLoading, action);
        default:
            return isLoading;
    }
}

const appReducers = combineReducers({
    isLoading,
});

export default appReducers;