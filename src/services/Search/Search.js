import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';

const Search = {
    start,
};

function start(queryText, queryFilter) {
    if(!queryText) {
        return new Promise( resolve => resolve(
            new KError(true, "Please enter what you're looking for")
        ) );
    }
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(Server.searchResultsDemo)
            , 2000
        );
    });

    /*
    return Server.post(Constants.SEARCH_URL, {email: email, pass: password}).then( data => {
        console.log(data);
    }); */
}


export default Search;