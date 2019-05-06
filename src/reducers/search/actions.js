import * as types from './actionTypes';
import appActions from '../app/actions';
import axios from 'axios';
import Search from '../../services/Search/Search';
import postActions from '../post/actions';
import commentActions from '../comment/actions';

export const showSearchForm = show => ({
    type: types.SHOW_SEARCH_FORM,
    show,
});

const addQueryText = queryText => ({
    type: types.ADD_QUERY_TEXT,
    queryText
});

const addAllIds = allIds => ({
    type: types.SEARCH_ADD_ALLIDS,
    allIds,
})

const handleSearch = (queryText, queryFilter='') => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Search.start(queryText, queryFilter)
            .then( result => {
                console.log(result);
                dispatch(appActions.appIsLoading(false));
                //dispatch(searchSucceeded(data.result));
                dispatch(addAllIds(result.data.allIds));
                dispatch(postActions.addPosts(result.data.byId));
                dispatch(commentActions.addComments(result.data.commentById));
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
});

function setDefault() {
    return dispatch => {
        dispatch(showSearchForm(false));
        dispatch(addQueryText(""));
        dispatch(searchSucceeded({}));
        dispatch(searchFailed(""));
        dispatch(setSearchFilter(""));
    }
}

const searchActions = {
    showSearchForm,
    addQueryText,
    handleSearch,
    searchStarted,
    searchSucceeded,
    searchFailed,
    setSearchFilter,
    setDefault,
};

export default searchActions;