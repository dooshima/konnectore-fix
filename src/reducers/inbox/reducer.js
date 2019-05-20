import { combineReducers } from 'redux';
import * as types from './actionTypes';
import addUserFollowingsReducer from './reducers/addUserFollowingsReducer';
import setCurrentThreadReducer from './reducers/setCurrentThreadReducer';
import addMessageRecuder from './reducers/addMessageReducer';
import addThreadReducer from './reducers/addThreadReducer';
import addThreadsReducer from './reducers/addThreadsReducer';

const threads = (threads={}, action) => {
    switch(action.type) {
        case types.INBOX_ADD_THREAD:
            return addThreadReducer(threads, action);
        case types.INBOX_ADD_THREADS:
            return addThreadsReducer(threads, action);
        default:
            return threads;
    }
}

const followings = (followings=[], action) => {
    switch(action.type) {
        case types.INBOX_GET_FOLLOWINGS:
            return addUserFollowingsReducer(followings, action);
        default:
            return followings;
    }
}

const messages = (messages={}, action) => {
    switch(action.type) {
        case types.INBOX_ADD_MESSAGE:
            return addMessageRecuder(messages, action);
        default:
            return messages;
    }
}

const currentThread = (currentThread={}, action) => {
    switch(action.type) {
        case types.INBOX_SET_CURRENT_THREAD:
            return setCurrentThreadReducer(currentThread, action);
        default:
            return currentThread;
    }
}

const inboxReducers = combineReducers({
    threads,
    followings,
    messages,
    currentThread,
});

export default inboxReducers;