import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';

const Auth = {
    login: login,
    signup: signup,
    validateLogin: validateLogin,
    logout,
};

function login(email, password) {
    const validate = validateLogin(email, password);
    if(validate.error === true) {
        return new Promise( resolve => resolve(validate) );
    }

    /* return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(Server.loginDemo)
            , 1200
        );
    }); */
    
    return Server.post(Constants.LOGIN_URL, {email: email, pass: password}).then( data => {
        console.log(data);
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

function signup(email, password, firstName) {

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

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email);
}

export default Auth;