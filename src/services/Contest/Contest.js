import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';
import Utility from '../Utility';

const Contest = {
    addEntry,
    getContest,
    getContestFeed,
    follow,
    searchContest,
    joinAsContestant,
    withdrawFromContest,
};

function addEntry (form, token) {
    return Server.authPost('api/add-entry', form, token)
        .then( response => response.data );
}

function searchContest (form, token) {
    console.log(form)
    return Server.authPost('api/search-contest', form, token)
        .then( response => response.data )
        .catch( error => error );
}

function getContest (slug, user_id) {
    return Server.post('api/get-contest', {slug, user_id})
        .then( response => response.data );
}

function follow (form, token) {
    return Server.authPost('api/follow-contest', form, token)
        .then( response => response.data )
}

function getContestFeed () {
    return Server.get('api/get-contest-feed')
        .then( response => response.data );
}

function joinAsContestant (form, token) {
    return Server.authPost('api/join-contest', form, token)
        .then( response => response.data )
}

function withdrawFromContest (form, token) {
    return Server.authPost('api/withdraw-from-contest', form, token)
        .then( response => response.data )
}

export default Contest;