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

const userActions = {
    userViewProfile,
    showAuthLoading,
    authLoginSuccess,
    handleLogin
};

export default userActions;