import { combineReducers } from "redux";
import showAuthLoadingReducer from './reduction/showAuthLoadingReducer';
import authLoginSuccessReducer from './reduction/authLoginSuccessReducer';
import * as types from './actionTypes';
import authErrorReducer from "./reduction/authErrorReducer";
import authLogoutSuccessReducer from "./reduction/authLogoutSuccessReducer";
import authSignupSuccessReducer from "./reduction/authSignupSuccessReducer";
import showCheckUsernameReducer from "./reduction/showCheckUsernameReducer";
import authUploadAvatarReducer from "./reduction/authUploadAvatarReducer";
import talentCategoryReducer from "./reduction/talentCategoryReducer";
import authSignupRedirectReducer from "./reduction/authSignupRedirectReducer";
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
            let d =  authLogoutSuccessReducer(state, action);
            console.log(d);
            return d;
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

const account = (account={}, action) => {
    switch(action.type) {
        case types.AUTH_SIGNUP_SUCCESS:
            return authSignupSuccessReducer(account, action);
        default:
            return account;
    }
}

const available = (available=true, action) => {
    switch(action.type) {
        case types.AUTH_CHECK_USERNAME:
            return showCheckUsernameReducer(available, action);
        default:
            return available;
    }
}

const avatar = (avatar="", action) => {
    switch(action.type) {
        case types.AUTH_UPLOAD_AVATAR:
            return authUploadAvatarReducer(avatar, action);
        default:
            return avatar;
    }
}

const talentCategories = (talentCategories=[], action) => {
    switch(action.type) {
        case types.AUTH_TALENT_CATEGORIES:
            return talentCategoryReducer(talentCategories, action);
        default:
            return talentCategories;
    }
}

const signupRedirect = (signupRedirect=false, action) => {
    switch(action.type) {
        case types.AUTH_SIGNUP_REDIRECT:
            return authSignupRedirectReducer(signupRedirect, action);
        default:
            return signupRedirect;
    }
}

const userReducers = combineReducers({ 
    isLoading,
    data,
    errorMsg,
    account,
    available,
    avatar,
    talentCategories,
    signupRedirect,
});
export default userReducers;