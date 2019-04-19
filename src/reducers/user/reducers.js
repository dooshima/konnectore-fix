import { combineReducers } from "redux";
import showAuthLoadingReducer from './reduction/showAuthLoadingReducer';
import authLoginSuccessReducer from './reduction/authLoginSuccessReducer';
import * as types from './actionTypes';
import * as postTypes from './../post/actionTypes';
import authErrorReducer from "./reduction/authErrorReducer";
import authLogoutSuccessReducer from "./reduction/authLogoutSuccessReducer";
import authSignupSuccessReducer from "./reduction/authSignupSuccessReducer";
import showCheckUsernameReducer from "./reduction/showCheckUsernameReducer";
import authUploadAvatarReducer from "./reduction/authUploadAvatarReducer";
import talentCategoryReducer from "./reduction/talentCategoryReducer";
import authSignupRedirectReducer from "./reduction/authSignupRedirectReducer";
import authEditProfileSuccessReducer from "./reduction/authEditProfileSuccessReducer";
import addUserPostsReducer from "./reduction/addUserPostsReducer";
import addUserCommentsReducer from "./reduction/addUserCommentsReducer";
import authTokenReducer from "./reduction/authTokenReducer";
import setUserPostsReducer from "./reduction/setUserPostsReducer";
import editAvatarReducer from "./reduction/editAvatarReducer";
import addPostReducer from "../post/reduction/addPostReducer";
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
        case types.AUTH_EDIT_PROFILE_SUCCESS:
            return authEditProfileSuccessReducer(state, action);
        case types.AUTH_EDIT_USER_AVATAR:
            return editAvatarReducer(state, action);
        default:
            return state;
    }
}

const posts = (posts={}, action) => {
    switch(action.type) {
        case types.AUTH_ADD_USER_POSTS:
            return addUserPostsReducer(posts, action);
        case types.AUTH_SET_USER_POSTS:
            return setUserPostsReducer(posts, action);
        case postTypes.POST_ADD_POST:
            return addPostReducer(posts, action);
        default:
            return posts;
    }
}

const comments = (comments={}, action) => {
    switch(action.type) {
        case types.AUTH_ADD_USER_COMMENTS:
            return addUserCommentsReducer(comments, action);
        default:
            return comments;
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

const authToken = (authToken="", action) => {
    switch(action.type) {
        case types.AUTH_TOKEN_ADD:
            return authTokenReducer(authToken, action);
        default:
            return authToken;
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
    posts,
    comments,
    authToken,
});
export default userReducers;