import * as types from './actionTypes';
import Auth from '../../services/Auth/Auth';
import { showSearchForm } from '../search/actions';

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
})

const handleLogin = (email, password) => {
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.login(email, password)
            .then( user => {
                dispatch(showAuthLoading(false));
                if(user.error !== false) {
                    const errorMsg = user.error? user.message: "Error logging in. Please retry";
                    throw new Error(errorMsg);
                }
                console.log(user);
                dispatch(authLoginSuccess(user.data));
                dispatch(showSearchForm(true));
            }).catch( error => {
                console.log(error)
                dispatch(showAuthLoading(false));
                dispatch(authError(error.message));
            });
    }
}

const handleLogout = (uid) => {
    return dispatch => {
        dispatch(showAuthLoading(true));
        Auth.logout(uid)
            .then( user => {
                dispatch(showAuthLoading(false));
                if(user.error !== false) {
                    const errorMsg = user.error? user.message: "Error logging out. Please retry";
                    throw new Error(errorMsg);
                }
                console.log(user);
                dispatch(authLogoutSuccess(user.data));
                dispatch(showSearchForm(false));
            }).catch( error => {
                console.log(error)
                dispatch(showAuthLoading(false));
                dispatch(authError(error.message));
            });
    }
}

const userActions = {
    userViewProfile,
    showAuthLoading,
    authLoginSuccess,
    handleLogin,
    authLogoutSuccess,
    handleLogout,
};

export default userActions;