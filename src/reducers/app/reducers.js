import * as types from './actionTypes';
import appIsLoadingReducer from './reduction/appIsLoadingReducer';
import { combineReducers } from 'redux';
import addDataReducer from './reduction/addDataReducer';

const isLoading = (isLoading=false, action) => {
    switch(action.type) {
        case types.APP_IS_LOADING:
            return appIsLoadingReducer(isLoading, action);
        default:
            return isLoading;
    }
}

const data = (data={}, action) => {
    switch(action.type) {
        case types.APP_ADD_DATA:
            return addDataReducer(data, action);
        default:
            return data;
    }
}

const appReducers = combineReducers({
    isLoading,
    data,
});

export default appReducers;