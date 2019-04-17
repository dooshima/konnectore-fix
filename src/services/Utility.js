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
    let avatar = path? path: "/images/avatar.png";
    return avatar;
}

const Utility = {
    progress,
    getPath,
};

export default Utility;