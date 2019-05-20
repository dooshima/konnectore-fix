import * as types from './actionTypes';
import appActions from '../app/actions';
import Inbox from './../../services/Inbox/Inbox';
import Utility from '../../services/Utility';

const addUserFollowings = followings => ({
    type: types.INBOX_GET_FOLLOWINGS,
    followings,
});

const addMessage = message => ({
    type: types.INBOX_ADD_MESSAGE,
    message
});

const addThread = thread => ({
    type: types.INBOX_ADD_THREAD,
    thread,
});

const addThreads = threads => ({
    type: types.INBOX_ADD_THREADS,
    threads,
})

const setCurrentThread = currentThread => ({
    type: types.INBOX_SET_CURRENT_THREAD,
    currentThread,
});

const handleGetFollowings = token => dispatch => {
    dispatch(appActions.appIsLoading(true));
    Inbox.getFollowings(token)
        .then(response => {
            dispatch(appActions.appIsLoading(false))
            if(!response.error) {
                dispatch(addUserFollowings(response.data));
            } 
        })
        .catch( error => {
            dispatch(appActions.appIsLoading(false));
            console.log(error);
        })
}

const getUserThreads = token => dispatch => {
    Inbox.getUserThreads(token)
        .then( response => {
            //console.log(response)
            if(!response.error) {
                const threads = response.data;
                dispatch(addThreads(response.data))
                /*for(let i in threads) {
                    let thread = threads[i];console.log(thread)
                    dispatch(addThread(thread));
                }*/
            }
        })
        .catch(error => {
            console.log(error)
        })
}

const getThreadMessages = (code, token) => dispatch => {
    dispatch(appActions.appIsLoading(true));
    Inbox.getThreadMessages(code, token)
        .then(response => {
            dispatch(appActions.appIsLoading(false))
            if(!response.error) {
                const messages = response.data;
                for(let i in messages) {
                    let message = messages[i];
                    dispatch(addMessage(message));
                }
                //dispatch(setCurrentThread(messages[0]));
            } 
        })
        .catch( error => {
            dispatch(appActions.appIsLoading(false));
            console.log(error);
        })
}

const sendMessage = (form, token) => dispatch => {
    //dispatch(appActions.appIsLoading(true));
    //console.log(form, token)
    Inbox.sendMessage(form, token)
        .then(response => {
            //console.log(response)
            //dispatch(appActions.appIsLoading(false))
            if(!response.error) {
                let message = response.data;
                let thread_code = response.data.message_thread_code;
                message.thread_code = thread_code;
                message.id = response.data.timestanp;
                dispatch(addMessage(message));
            }
        })
        .catch( error => {
            //dispatch(appActions.appIsLoading(false));
            console.log(error);
        })
}

const inboxActions = {
    handleGetFollowings,
    sendMessage,
    getThreadMessages,
    setCurrentThread,
    addThread,
    getUserThreads,
};

export default inboxActions;