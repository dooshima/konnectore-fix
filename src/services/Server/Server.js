import axios from 'axios';
import { searchResults } from '../../components/assets/searchResults';
import Constants from '../../assets/Constants';

const headers = {
    "Content-Type": 'application/json',
    "Accept": 'application/json',
}
// x-www-form-urlencoded

const get = (url, options={}) => {
    if(options) {
        options = {...headers, ...options}
    }
    return axios.get(Constants.BASE_URL + url, {headers: options});
}

const post = (url, data, options={}) => {
    if(options) {
        options = {...headers, ...options}
    }
    return axios.post(Constants.BASE_URL + url, data, {headers: options});
} 

const authPost = (url, data, token) => {
    const authToken = {Authorization: 'Bearer ' + token};
    const options = {...headers, ...authToken}
    
    return axios.post(Constants.BASE_URL + url, data, {headers: options});
}

const authGet = (url, token) => {
    const authToken = {Authorization: 'Bearer ' + token};
    const options = {...headers, ...authToken}
    console.log(options)
    return axios.get(Constants.BASE_URL + url, {headers: options});
}

const loginDemo = {"error":false,"message":"Login request successful","data":{"id":"3","email":"ola@mindwalks.org","likes":0,"followers":2,"following":0,"contests":3,"wallet":"223.60","profileData":{"username":"hollaholla","email":"ola@mindwalks.org","firstName":"Holla","lastName":"Holla","gender":"","dateOfBirth":"","avatar":"default.png","bio":""}}}

const searchResultsDemo = searchResults;

const Server = {
    get,
    post,
    loginDemo,
    searchResultsDemo,
    authPost,
    authGet,
}

export default Server;