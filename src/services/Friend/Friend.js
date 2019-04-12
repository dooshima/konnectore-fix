import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';

const Friend = {
    getFriends,
    follow,
};

function getFriends (token) {
    return Server.authGet('api/get-friends', token)
        .then( resp => resp.data );
};

function follow(user_id, token) {
    return Server.authPost('api/follow', {user_id}, token)
        .then( resp => resp.data );
}

export default Friend;