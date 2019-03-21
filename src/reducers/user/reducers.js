import { combineReducers } from "redux";
import showAuthLoadingReducer from './reduction/showAuthLoadingReducer';
import authLoginSuccessReducer from './reduction/authLoginSuccessReducer';
import * as types from './actionTypes';
import authErrorReducer from "./reduction/authErrorReducer";
import authLogoutSuccessReducer from "./reduction/authLogoutSuccessReducer";
const initialState = {};

const userUpdateProfile = (state=initialState) => {
    return state;
};

const isLoading = (state=false, action) => {
    switch (action.type) {
        case types.AUTH_LOADING:
            return showAuthLoadingReducer(state, action);
        default:
            return state;
    }
};

const data = (state={}, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN_SUCCESS:
            return authLoginSuccessReducer(state, action);
        case types.AUTH_LOGOUT_SUCCESS:
            return authLogoutSuccessReducer(state, action);
        default:
            return state;
    }
}

const errorMsg = (state="", action) => {
    switch (action.type) {
        case types.AUTH_LOGIN_ERROR:
            return authErrorReducer(state, action);
        default:
            return state;
    }
}

const userReducers = combineReducers({ 
    isLoading,
    data,
    errorMsg,
});
export default userReducers;