import axios from 'axios';
import { searchResults } from '../../components/assets/searchResults';

const headers = {
    "Content-Type": 'application/x-www-form-urlencoded',
}

const get = url => {
    return axios.get(url);
}

const post = (url, data) => {
    return axios.post(url, data, {headers: headers});
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