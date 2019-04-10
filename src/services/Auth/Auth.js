import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';

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
};

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
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve({error: false, message: "Logged Out!", data: {}})
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

function processOnboarding(data) {
    return Server.post('api/onboard', data)
        .then( resp => resp.data)
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

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email);
}

export default Auth;