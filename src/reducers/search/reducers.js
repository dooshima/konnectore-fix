import * as types from './actionTypes';
import showSearchFormReducer from './reduction/showFormReducer';
import addQueryTextReducer from './reduction/addQueryTextReducer';
import { combineReducers } from 'redux';

const initialState = {
    showSearchForm: false,
}
const show = (state=false, action) => {
    switch(action.type) {
        case types.SHOW_SEARCH_FORM:
            return showSearchFormReducer(state, action);
        default:
            return state;
    }
};

const queryText = (state='', action) => {
    switch(action.type) {
        case types.ADD_QUERY_TEXT:
            return addQueryTextReducer(state, action);
        default:
            return state;
    }
}

const searchReducers = combineReducers({
    show,
    queryText,
});

export default searchReducers;



