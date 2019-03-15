import * as types from './actionTypes';
import appActions from '../app/actions';
import axios from 'axios';
import Search from '../../services/Search/Search';

export const showSearchForm = show => ({
    type: types.SHOW_SEARCH_FORM,
    show,
});

const addQueryText = queryText => ({
    type: types.ADD_QUERY_TEXT,
    queryText
});

const handleSearch = (queryText, queryFilter='') => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Search.start(queryText, queryFilter)
            .then( result => {
                dispatch(appActions.appIsLoading(false));
                dispatch(searchSucceeded(result.data));
            })
            .catch( error => {
                console.log(error);
                dispatch(appActions.appIsLoading(false));
            });
    }
};

const searchStarted = () => ({
    type: types.SEARCH_STARTED,
});

const searchSucceeded = searchResult => ({
    type: types.SEARCH_SUCCEEDED,
    searchResult,
});

const searchFailed = errorMessage => ({
    type: types.SEARCH_FAILED,
    errorMessage,
});

const setSearchFilter = filter => ({
    type: types.SET_SEARCH_FILTER,
    filter,
})

const searchActions = {
    showSearchForm,
    addQueryText,
    handleSearch,
    searchStarted,
    searchSucceeded,
    searchFailed,
    setSearchFilter,
};

export default searchActions;