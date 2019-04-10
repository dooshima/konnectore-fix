import axios from 'axios';
import { searchResults } from '../../components/assets/searchResults';

const headers = {
    "Content-Type": 'application/json',
    "Accept": 'application/json',
}
// x-www-form-urlencoded

const get = (url, options={}) => {
    if(options) {
        options = {...headers, ...options}
    }
    return axios.get(url, {headers: options});
}

const post = (url, data, options={}) => {
    if(options) {
        options = {...headers, ...options}
    }
    return axios.post(url, data, {headers: options});
}

const loginDemo = {"error":false,"message":"Login request successful","data":{"id":"3","email":"ola@mindwalks.org","likes":0,"followers":2,"following":0,"contests":3,"wallet":"223.60","profileData":{"username":"hollaholla","email":"ola@mindwalks.org","firstName":"Holla","lastName":"Holla","gender":"","dateOfBirth":"","avatar":"default.png","bio":""}}}

const searchResultsDemo = searchResults;

const Server = {
    get,
    post,
    loginDemo,
    searchResultsDemo,
}

export default Server;