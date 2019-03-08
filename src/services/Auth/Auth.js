import KError from '../../models/KError';

const Auth = {
    login: login,
    signup: signup,
    validateLogin: validateLogin,
};

function login(email, password) {
    const validate = validateLogin(email, password);
    if(validate !== true) {
        return validate;
    }
    if(email === 'test@email.com' && password === 'test') {
        return true;
    } else {
        return new KError(true, "Invalid credentials");
    }
}

function signup(email, password, firstName) {

}

function validateLogin(email, password) {
    if(!email || !password) {
        return new KError(true, "Email and password are required");
    }
    if(!isEmail(email)) {
        return new KError(true, "Invalid Email");
    }
    if(password.length < 4) {
        return new KError(true, "Password is too short!.");
    }
    return true;
}

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email);
}

export default Auth;