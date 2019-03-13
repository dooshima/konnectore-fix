import searchActions from './actions';
import axios from 'axios';
import Constants from './../../'

/**
 * This function takes the queryText,
 * Dispatches the startSearch action
 * Makes a request to the server
 * Receives the result and dispatches searchSuccess action
 * Or if error dispathes searchError action
 */

 const handleSearchAction = queryText => {
     return dispatch => {
        dispatch(searchActions.startSearch());
        axios.post(Constants );
     }
 }