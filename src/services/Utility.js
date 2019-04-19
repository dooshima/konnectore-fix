import Constants from "../assets/Constants";

const progress = (event) => {
    const { total, loaded } = event;
    let val = Math.ceil(loaded / total * 100);
    return val;

};

const getPath = url => {
    let path = '';
    if(url) {
        path = url.includes('http')? url: Constants.BASE_URL + "storage/" + url;
    }
    return path;
}

const getAvatar = url => {
    const path = getPath(url);
    let avatar = path? path: "/images/avatar.png";
    return avatar;
}

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email);
}

const Utility = {
    progress,
    getPath,
    getAvatar,
    isEmail,
};

export default Utility;