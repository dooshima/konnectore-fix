import * as types from './actionTypes';
import Auth from '../../services/Auth/Auth';
import searchActions, { showSearchForm } from '../search/actions';
import KError from '../../models/KError';
import appActions from '../app/actions';
import dialogActions from '../dialog/actions';
import contestActions from '../contest/actions';
import postActions from '../post/actions';
import friendActions from '../friend/actions';
import meActions from '../me/actions';
import Utility from '../../services/Utility';
import commentActions from '../comment/actions';
import history from './../../widgets/router/history';
import inboxActions from '../inbox/actions';

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

const processOnboarding = (data, token) => {
    console.log(data);
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.processOnboarding(data, token)
            .then( profile => {
                console.log(profile);
                const data = profile.data;
                const {user, posts, comments} = data;
                
                dispatch(showAuthLoading(false));
                if(profile && !profile.error) {
                    /*dispatch(authLoginSuccess(profile.data));
                    dispatch(authSignupSuccess({}));
                    dispatch(showSearchForm(true));
                    dispatch(authError(""));
                    dispatch(uploadAvatar(""));
                    dispatch(authSignupRedirect(true)); */

                    dispatch(postActions.addPosts(posts.data.byId));
                    dispatch(meActions.addPostIds(posts.data.allIds));
                    dispatch(meActions.addCommentIds(comments.allIds));
                    dispatch(commentActions.addComments(comments.byId));
                    
                    //const p = extractPosts(posts);
                    //dispatch(addUserPosts(p));
                    //const byId = null !== p && typeof(p) !== 'undefined'? p.byId: {};
                    //dispatch(postActions.addPosts(byId));
                    //dispatch(addUserComments(comments));
                    dispatch(authLoginSuccess(user));
                    dispatch(showSearchForm(true));
                    dispatch(authError(""));
                    dispatch(authSignupRedirect(true));

                    setTimeout(() => history.push('/'), 1000);

                    //setTimeout(() => context.goto('/me'), 1000);

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
});

const checkUsername = username => {
    return dispatch => {
        Auth.checkUsername(username)
            .then( response => {
                console.log(response)
                dispatch(isUsernameExist(!response.data.available))
                dispatch(showAuthLoading(false));
            })
            .catch( error => {
                dispatch(showAuthLoading(false));
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

const setUserPosts = posts => ({
    type: types.AUTH_SET_USER_POSTS,
    posts,
})

const addUserComments = comments => ({
    type: types.AUTH_ADD_USER_COMMENTS,
    comments,
});

const addAuthToken = authToken => ({
    type: types.AUTH_TOKEN_ADD,
    authToken,
})

const handleUploadAvatar = (uid, file) => {
    console.log(file)
    return dispatch => {
        dispatch(showAuthLoading(true));
        //dispatch(authSignupRedirect(false));
        Auth.uploadAvatar(uid, file)
            .then( resp => {
                console.log(resp)
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

const editUserAvatar = data => ({
    type: types.AUTH_EDIT_USER_AVATAR,
    data
});

const changeUserPassword = () => ({
    type: types.AUTH_CHANGE_USER_PASSWORD,
});

const updateUsername = username => ({
    type: types.AUTH_UPDATE_USERNAME,
    username,
});

const addFollowers = followers => ({
    type: types.AUTH_ADD_FOLLOWERS,
    followers,
});

const addFollowings = followings => ({
    type: types.AUTH_ADD_FOLLOWINGS,
    followings,
});

const resendConfirmation = (token) => dispatch => {
    Auth.resendConfirmation(token)
        .then( response => console.log(response) )
        .catch( error => console.log(error) );
}

const addSuggestion = suggestion => ({
    type: types.AUTH_FRIEND_SUGGESTION,
    suggestion,
});

const getTalentCategories = () => {
    return dispatch => {
        Auth.getTalentCategories()
            .then( resp => {
                dispatch(addTalentCategories(resp.data));
            } );
    }
}

const getFriendSuggestion = token => dispatch => {
    Auth.getFriendSuggestion(token)
        .then( response => {
            console.log(response);
            if(!response.error) {
                dispatch(addSuggestion(response.allIds));
                dispatch(friendActions.addToFriends(response.byId));
            }
        } )
};

const handleGetFollowers = token => dispatch => {
    Auth.getFollowers(token)
        .then( response => {
            if(!response.error) {
                dispatch(addFollowers(response.data));
            }
        })
        .catch( error => {
            console.log(error);
        })
}

const handleGetFollowings = token => dispatch => {
    Auth.getFollowings(token)
        .then( response => {
            if(!response.error) {
                dispatch(addFollowings(response.data));
            }
        })
        .catch( error => {
            console.log(error);
        })
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
                dispatch(authSignupSuccess(user.data));
                dispatch(authError(""));
            })
            .then( () => {
                Auth.requestToken(data.email, data.password)
                    .then( token => {
                        const accessToken = token.access_token;
                        if(accessToken) {
                            dispatch(addAuthToken(accessToken));
                        } 
                    });
            })
            .catch( error => {
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
                    dispatch(addAuthToken(accessToken));
                    return accessToken;
                } 
                throw new KError(true, "Invalid username or password")
            })
            .then (accessToken => {
                return Auth.signin(accessToken);
            })
            .then( data => {
                const {user, posts, comments} = data;
                //console.log(posts, posts.byId)
                dispatch(showAuthLoading(false));
                if(!user) {
                    const errorMsg = user.error? user.message: "Error logging in. Please retry";
                    throw new Error(errorMsg);
                }
                dispatch(postActions.addPosts(posts.data.byId));
                dispatch(meActions.addPostIds(posts.data.allIds));
                dispatch(meActions.addCommentIds(comments.allIds));
                dispatch(commentActions.addComments(comments.byId));
                
                //const p = extractPosts(posts);
                //dispatch(addUserPosts(p));
                //const byId = null !== p && typeof(p) !== 'undefined'? p.byId: {};
                //dispatch(postActions.addPosts(byId));
                //dispatch(addUserComments(comments));
                dispatch(authLoginSuccess(user));
                dispatch(showSearchForm(true));
                dispatch(authError(""));
                dispatch(authSignupRedirect(true));

                if(!Utility.isset(user.username) || !Utility.isset(user.firstname) || !Utility.isset(user.lastname)) {
                    authSignupSuccess({id: user.id, email: user.email});
                    console.log('Get to onboarding')
                    history.push('/onboard/');
                } else {
                    history.push('/me');
                }

            }).catch( error => {
                console.log(error);
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
                setAppDefault(dispatch);
                dispatch(authError(""));
                history.push("/");
            }).catch( error => {
                console.log(error)
                setAppDefault(dispatch);
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
                dispatch(authEditProfileSuccess(user.data));
                dispatch(authError("redirectme"));
            }).catch( error => {
                dispatch(appActions.appIsLoading(false));
                dispatch(authError(error.message));
            });
    }
}

const editAvatar = (form, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.editAvatar(form, token)
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                if(!response.error)
                    dispatch(editUserAvatar(response.data));
                console.log(response);
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
};

const changePassword = (form, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.changePassword(form, token)
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                console.log(response);
                if(!response.error) {
                    dispatch(authError("redirectme"));
                } else {
                    dispatch(authError(response.message));
                }
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
}

const createPasswordReset = form => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.createPasswordReset(form)
            .then( response => {
                console.log(response)
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(authError("passwordreset"));
                } else {
                    dispatch(authError(response.message));
                }
            } )
            .catch ( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
}

const loadPasswordReset = token => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.loadPasswordReset(token)
            .then( response => {
                console.log(response)
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(authError("resetform"));
                    dispatch(authSignupSuccess(response.data));
                } else {
                    dispatch(authError(response.message));
                    dispatch(authSignupSuccess({}));
                }
            } )
            .catch ( error => {
                dispatch(appActions.appIsLoading(false));
                dispatch(authSignupSuccess({}));
                console.log(error);
            } )
    }
}

const handlePasswordReset = form => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.handlePasswordReset(form)
            .then( response => {
                console.log(response)
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(authError(response.message));
                    dispatch(authSignupSuccess({}));
                } else {
                    dispatch(authError(response.message));
                }
            } )
            .catch ( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
}

const getUser = (id, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Auth.getUser(id, token)
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    const {user, posts, comments} = response.data;
                    console.log(posts)
                    //const p = extractPosts(posts);
                    //const byId = null !== p && typeof(p) !== 'undefined'? p.byId: {};
                    //const allIds = Utility.isset(p) && Utility.isset(p.allIds)? p.allIds: [];
                    dispatch(postActions.addPosts(posts.data.byId));
                    dispatch(meActions.addPostIds(posts.data.allIds));
                    dispatch(meActions.addCommentIds(comments.allIds));
                    dispatch(commentActions.addComments(comments.byId));
                    dispatch(authLoginSuccess(user));
                }
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
}

const storeUsername = (username, token) => dispatch => {
    Auth.storeUsername(username, token)
        .then( response => {
            const data = response;
            if(!data.error) {
                dispatch(updateUsername(username));
            }
        })
        .catch( error => console.log(error))
};

function extractPosts(postData) {

    const { byId, allIds } = postData.data;
    let posts = postData;
    delete posts['data'];
    posts['byId'] = byId;
    posts['allIds'] = allIds;

    return posts;
}

function setDefault() {
    return dispatch => {
        dispatch(addTalentCategories([]));
        dispatch(userViewProfile({}));
        dispatch(showAuthLoading(false));
        dispatch(authLoginSuccess({}));
        dispatch(authError(""));
        dispatch(authSignupSuccess({}));
        dispatch(authSignupRedirect(false));
        dispatch(isUsernameExist(true));
        dispatch(uploadAvatar(""));
        dispatch(setUserPosts({}));
        dispatch(addUserComments({}));
        dispatch(addAuthToken(""));
    }
}

function setAppDefault(dispatch) {
    dispatch(appActions.setDefault());
    dispatch(setDefault());
    dispatch(searchActions.setDefault());
    dispatch(postActions.setDefault());
    dispatch(friendActions.setDefault());
    dispatch(dialogActions.setDefault());
    dispatch(contestActions.setDefault());
    dispatch(meActions.setDefault());
    dispatch(commentActions.setDefault());
    dispatch(inboxActions.setDefault());
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
    setDefault,
    editAvatar,
    changePassword,
    authError,
    createPasswordReset,
    loadPasswordReset,
    handlePasswordReset,
    getUser,
    storeUsername,
    resendConfirmation,
    getFriendSuggestion,
    handleGetFollowers,
    handleGetFollowings,
};

export default userActions;