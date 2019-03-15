import * as types from './actionTypes';
import showSearchFormReducer from './reduction/showFormReducer';
import addQueryTextReducer from './reduction/addQueryTextReducer';
import { combineReducers } from 'redux';
import searchStartedReducer from './reduction/searchStartedReducer';
import searchSucceededReducer from './reduction/searchSucceededReducer';
import setSearchFilterReducer from './reduction/setSearchFilterReducer';

const initialState = {
    showSearchForm: false,
}
const show = (state=false, action) => {
    switch (action.type) {
        case types.SHOW_SEARCH_FORM:
            return showSearchFormReducer(state, action);
        default:
            return state;
    }
};

const queryText = (state="", action) => {
    switch (action.type) {
        case types.ADD_QUERY_TEXT:
            return addQueryTextReducer(state, action);
        default:
            return state;
    }
}

const isSearching = (state=false, action) => {
    switch (action.type) {
        case types.SEARCH_STARTED:
            return searchStartedReducer(state, action);
        default:
            return state;
    }
}

const searchResult = (searchResult={}, action) => {
    switch(action.type) {
        case types.SEARCH_SUCCEEDED:
            return searchSucceededReducer(searchResult, action);
        default:
            return searchResult;
    }
}

const filter = (filter='all', action) => {
    switch(action.type) {
        case types.SET_SEARCH_FILTER:
            return setSearchFilterReducer(filter, action);
        default:
            return filter;
    }
}

const searchReducers = combineReducers({
    show,
    queryText,
    isSearching,
    searchResult,
    filter,
});

export default searchReducers;



