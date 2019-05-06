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
    /*return new Promise((resolve, reject) => {
        setTimeout(
            () => 
            , 2000
        );
    }); */

    
    return Server.post(Constants.SEARCH_URL, {q: queryText, filter: queryFilter})
        .then( response => response.data );
}


export default Search;