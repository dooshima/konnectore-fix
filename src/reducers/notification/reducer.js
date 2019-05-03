import { combineReducers } from 'redux';
import * as types from './actionTypes';
import addNotifications from './reducers/addNotifications';

const byId = (state={}, action) => {
    switch(action.type) {
        case types.NOTIFICATION_GET_ALL:
            return addNotifications(state, action);
        default:
            return state;
    }
}
const notificationReducers = combineReducers({
    byId,
})

export default notificationReducers;