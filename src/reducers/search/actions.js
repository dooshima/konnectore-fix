import * as types from './actionTypes';

export const showSearchForm = show => ({
    type: types.SHOW_SEARCH_FORM,
    show,
});

const addQueryText = queryText => ({
    type: types.ADD_QUERY_TEXT,
    queryText
});

const handleSearch = searchResult => ({
    type: types.HANDLE_SEARCH,
    searchResult,
});

const startSearch = () => ({
    type: types.SEARCH_STARTED,
});

const receiveSearchResult = searchResult => ({
    type: types.SEARCH_SUCCESS,
    searchResult,
});

const handleSearchError = errorMessage => ({
    type: types.SEARCH_ERROR,
    errorMessage,
})

const searchActions = {
    showSearchForm,
    addQueryText,
    handleSearch,
    startSearch,
    receiveSearchResult,
    handleSearchError,
};

export default searchActions;