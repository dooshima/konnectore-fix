import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';
import Utility from '../Utility';

const Contest = {
    addEntry,
    getContest,
    getContestFeed,
};

function addEntry (form, token) {
    return Server.authPost('api/add-entry', form, token)
        .then( response => response.data );
}

function getContest (slug) {
    return Server.post('api/get-contest', {slug})
        .then( response => response.data );
}

function getContestFeed () {
    return Server.get('api/get-contest-feed')
        .then( response => response.data );
}

export default Contest;