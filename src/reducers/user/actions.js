import * as types from './actionTypes';
import Auth from '../../services/Auth/Auth';
import { showSearchForm } from '../search/actions';
import KError from '../../models/KError';
import appActions from '../app/actions';

const userViewProfile = user => ({
    type: types.USER_VIEW_PROFILE,
    user,
});

const showAuthLoading = isLoading => ({
    type: types.AUTH_LOADING,
    isLoading,
});

const authLoginSuccess = data => ({
    type: types.AUTH_LOGIN_SUCCESS,
    data,
});

const authError = errorMsg => ({
    type: types.AUTH_LOGIN_ERROR,
    errorMsg,
});

const authLogoutSuccess = data => ({
    type: types.AUTH_LOGOUT_SUCCESS,
    data,
});

const authEditProfileSuccess = data => ({
    type: types.AUTH_LOGOUT_SUCCESS,
    data,
})

const authSignupSuccess = account => ({
    type: types.AUTH_SIGNUP_SUCCESS,
    account,
});

const authSignupRedirect = signupRedirect => ({
    type: types.AUTH_SIGNUP_REDIRECT,
    signupRedirect,
})

const processOnboarding = data => {
    console.log(data);
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.processOnboarding(data)
            .then( profile => {
                dispatch(showAuthLoading(false));
                if(!profile.error) {
                    dispatch(authLoginSuccess(profile.data));
                    dispatch(authSignupSuccess({}));
                    dispatch(showSearchForm(true));
                    dispatch(authError(""));
                    dispatch(uploadAvatar(""));
                    dispatch(authSignupRedirect(true));
                } else {
                    dispatch(authSignupRedirect(false));
                    dispatch(authError(profile.message));
                }
            } )
            .catch( error => {
                //dispatch(authSignupSuccess({}));
                console.log(error);
                dispatch(showSearchForm(false));
                dispatch(authError(""));
                dispatch(showAuthLoading(false));
            });
    }
}

const clearUserCache = () => {
    return dispatch => {
        dispatch(authError(""));
        dispatch(showAuthLoading(false));
        //dispatch(authSignupSuccess({}));
        dispatch(isUsernameExist(true));
        dispatch(authSignupRedirect(false));
    }
}

const isUsernameExist = available => ({
    type: types.AUTH_CHECK_USERNAME,
    available,
})

const checkUsername = username => {
    return dispatch => {
        Auth.checkUsername(username)
            .then( response => {
                console.log(response)
                dispatch(isUsernameExist(!response.data.available))
            });
    }
}

const uploadAvatar = avatar => ({
    type: types.AUTH_UPLOAD_AVATAR,
    avatar,
})

const addUserPosts = posts => ({
    type: types.AUTH_ADD_USER_POSTS,
    posts,
});

const addUserComments = comments => ({
    type: types.AUTH_ADD_USER_COMMENTS,
    comments,
})

const handleUploadAvatar = file => {
    return dispatch => {
        dispatch(showAuthLoading(true));
        //dispatch(authSignupRedirect(false));
        Auth.uploadAvatar(file)
            .then( resp => {
                dispatch(showAuthLoading(false));
                if(!resp.error && resp.data) {
                    dispatch(uploadAvatar(resp.data.path));
                    dispatch(authError(""));
                } else {
                    dispatch(authError(resp.message));
                }
            } 
        );
    }
}

const addTalentCategories = talentCategories => ({
    type: types.AUTH_TALENT_CATEGORIES,
    talentCategories,
})
const getTalentCategories = () => {
    return dispatch => {
        Auth.getTalentCategories()
            .then( resp => {
                dispatch(addTalentCategories(resp.data));
            } );
    }
}

const handleSignup = data => {
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.signup(data)
            .then( user => {
                if(user.error !== false) {
                    const errorMsg = user.error? user.message: "Error signing up. Please retry";
                    throw new Error(errorMsg);
                }
                console.log(user);
                dispatch(authSignupSuccess(user.data));
                dispatch(authError(""));
            }).catch( error => {
                dispatch(showAuthLoading(false));
                dispatch(authError(error.message));
            });
    }
}

const handleLogin = (email, password) => {
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.requestToken(email, password)
            .then( token => {
                const accessToken = token.access_token;
                if(accessToken) {
                    return accessToken;
                } 
                throw new KError(true, "Invalid username or password")
            })
            .then (accessToken => {
                return Auth.signin(accessToken);
            })
            .then( data => {
                const {user, posts, comments} = data;
                console.log(user, posts, comments);
                dispatch(showAuthLoading(false));
                if(!user) {
                    const errorMsg = user.error? user.message: "Error logging in. Please retry";
                    throw new Error(errorMsg);
                }
                dispatch(addUserPosts(extractPosts(posts)));
                dispatch(addUserComments(comments));
                dispatch(authLoginSuccess(user));
                dispatch(showSearchForm(true));
                dispatch(authError(""));
                dispatch(authSignupRedirect(true));
            }).catch( error => {
                console.log(error)
                dispatch(authError("Invalid username or password"));
                dispatch(showAuthLoading(false));
                //dispatch(authError(error.message));
            });
    }
}

const handleLogout = (uid) => {
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.logout(uid)
            .then( user => {
                dispatch(showAuthLoading(false));
                if(user && user.error !== false) {
                    const errorMsg = user.error? user.message: "Error logging out. Please retry";
                    throw new Error(errorMsg);
                }
                console.log(user);
                dispatch(authLogoutSuccess({}));
                dispatch(showSearchForm(false));
            }).catch( error => {
                console.log(error)
                dispatch(showAuthLoading(false));
                dispatch(authError(""));
            });
    }
}

const handleEditProfile = data => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.handleEditProfile(data)
            .then( user => {
                dispatch(appActions.appIsLoading(false));
                if(user.error !== false) {
                    const errorMsg = user.error? user.message: "Error editing your profile. Please retry";
                    throw new Error(errorMsg);
                }
                console.log(user);
                dispatch(authEditProfileSuccess(user.data));
                dispatch(authError(""));
            }).catch( error => {
                dispatch(appActions.appIsLoading(false));
                dispatch(authError(error.message));
            });
    }
}

function extractPosts(postData) {

    const { byId, allIds } = postData.data;
    let posts = postData;
    delete posts['data'];
    posts['byId'] = byId;
    posts['allIds'] = allIds;

    return posts;
}

const userActions = {
    userViewProfile,
    showAuthLoading,
    authLoginSuccess,
    handleLogin,
    authLogoutSuccess,
    handleLogout,
    authSignupSuccess,
    handleSignup,
    clearUserCache,
    checkUsername,
    uploadAvatar,
    handleUploadAvatar,
    getTalentCategories,
    processOnboarding,
    authSignupRedirect,
    handleEditProfile,
};

export default userActions;