import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import { deleteState } from './../../localStorage';

const Auth = {
    login: login,
    signup: signup,
    validateLogin: validateLogin,
    logout,
    checkUsername,
    uploadAvatar,
    getTalentCategories,
    processOnboarding,
    requestToken,
    signin,
    handleEditProfile,
    getFriends,
    editAvatar,
    changePassword,
    createPasswordReset,
    loadPasswordReset,
    handlePasswordReset,
    getUser,
    storeUsername,
    resendConfirmation,
    getFriendSuggestion,
    getFollowers,
    getFollowings,
};


function storeUsername (username, token) {
    return Server.authPost('api/store-username', {username}, token)
        .then( response => response.data )
        .catch ( error => error )
}

function resendConfirmation (token) {
    return Server.authGet('api/resend', token)
        .then( response => response.data )
        .catch ( error => error )
}

function getFriendSuggestion (token) {
    return Server.authGet('api/growff', token)
        .then( response => response.data )
        .catch( error => error );
}

function getFollowers (token) {
    return Server.authGet('api/getff', token)
        .then( response => response.data )
        .catch( error => error );
}

function getFollowings (token) {
    return Server.authGet('api/getffing', token)
        .then( response => response.data )
        .catch( error => error );
}

function login(email, password) {
    const validate = validateLogin(email, password);
    if(validate.error === true) {
        return new Promise( resolve => resolve(validate) );
    }

    /*return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(Server.loginDemo)
            , 1200
        );
    }); */

    return Server.post(Constants.LOGIN_URL, {email: email, pass: password}).then( response => {
        return response.data;
    });
}

function logout(uid) {
    deleteState();
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                
                resolve({error: false, message: "Logged Out!", data: {}})
            }
            , 1200
        );
    });
}

function signup(form) {
    return Server.post('api/create-user', form)
        .then( resp => resp.data );
}

function uploadAvatar(avatar) {
    return Server.post("api/upload-avatar", avatar)
        .then( resp => resp.data );
}

function checkUsername(username) {
    return Server.post('api/checkusername', username)
        .then( resp => resp.data);
}

function getTalentCategories() {
    return Server.get('api/get-talent-categories')
        .then( resp => resp.data);
}

function getUser(id, token) {
    return Server.authGet('api/get-user/' + id, token)
        .then( resp => resp.data );
}

function processOnboarding(data) {
    return Server.post('api/onboard', data)
        .then( resp => resp.data)
        .catch( error => console.log(error));
}

function handleEditProfile(data) {
    console.log(data);
    return Server.post('api/edit-profile', data)
        .then( resp => resp.data )
        .catch( error => console.log(error));
}

function validateLogin(email, password) {
    let error = new KError(false, "");
    if(!email || !password) {
        error = new KError(true, "Email and password are required");
        return error.toObj();
    }
    /*
    if(!isEmail(email)) {
        error = new KError(true, "Invalid Email");
        return error.toObj();
    } */
    if(password.length < 4) {
        error = new KError(true, "Password is too short!.");
        return error.toObj();
    }
    return error.toObj();
}

function requestToken(email, password) {
    const data = {
        username: email,
        password,
        grant_type: Constants.GRANT_TYPE,
        client_id: Constants.CLIENT_ID,
        client_secret: Constants.CLIENT_SECRET,
    }
    
    return Server.post('oauth/token', data)
        .then( resp => resp.data);
}

function signin(token) {
    const Authorization = 'Bearer ' + token;
    return Server.get('api/signin', {Authorization: Authorization})
        .then( resp => resp.data);
}

function getFriends(token) {
    return Server.authGet('api/get-friends', token)
        .then ( friends => {
            return friends
        });
}

function editAvatar(form, token) {
    return Server.authPost('api/edit-avatar', form, token)
        .then( response => response.data )
}

function changePassword(form, token) {
    return Server.authPost('api/password/change', form, token)
        .then( response => response.data );
}

function createPasswordReset(form) {
    return Server.post('api/password/create', form)
        .then( response => response.data );
}

function loadPasswordReset(token) {
    return Server.get('api/password/find/' + token)
        .then( response => response.data );
}

function handlePasswordReset(form) {
    return Server.post('api/password/reset', form)
        .then( response => response.data );
}

export default Auth;