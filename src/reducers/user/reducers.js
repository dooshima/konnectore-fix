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
import updateUsernameReducer from "./reduction/updateUsernameReducer";
import addSuggestionReducer from "./reduction/addSuggestionReducer";
import addFollowingsReducer from "./reduction/addFollowingsReducer";
import addFollowersReducer from "./reduction/addFollowersReducer";
import authProgressReducer from "./reduction/authProgressReducer";
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
        case types.AUTH_UPDATE_USERNAME:
            return updateUsernameReducer(state, action);
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
        case types.AUTH_FRIEND_SUGGESTION:
            return addSuggestionReducer(account, action);
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

const followers = (followers=[], action) => {
    switch(action.type) {
        case types.AUTH_ADD_FOLLOWERS:
            return addFollowersReducer(followers, action);
        default:
            return followers;
    }
};

const followings = (followings=[], action) => {
    switch(action.type) {
        case types.AUTH_ADD_FOLLOWINGS:
            return addFollowingsReducer(followings, action);
        default:
            return followings;
    }
};

const authProgress = (authProgress={}, action) => {
    switch(action.type) {
        case types.AUTH_SET_AUTH_PROGRESS:
            return authProgressReducer(authProgress, action);
        default:
            return authProgress;
    }
};

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
    followers,
    followings,
    authProgress,
});
export default userReducers;