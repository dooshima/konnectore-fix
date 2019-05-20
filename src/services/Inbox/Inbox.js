import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';
import Utility from '../Utility';

const Inbox = {
    getFollowings,
    sendMessage,
    getThreadMessages,
    getUserThreads,
};

function getFollowings (token) {
    return Server.authGet('api/getff', token)
        .then( response => response.data );
}

function getThreadMessages (threadcode, token) {
    return Server.authGet('api/readm?threadcode=' + threadcode, token)
        .then( response => response.data );
}

function getUserThreads (token) {
    return Server.authGet('api/inboxm', token)
        .then( response => response.data );
}

function sendMessage (form, token) {
    return Server.authPost('api/sendm', form, token)
        .then( response => response.data );
}

export default Inbox;