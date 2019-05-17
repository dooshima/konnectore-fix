import { combineReducers } from 'redux';

const threads = (threads={}, action) => {
    return threads;
}
const inboxReducers = combineReducers({
    threads,
});

export default inboxReducers;