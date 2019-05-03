import * as types from './actionTypes';
import appActions from '../app/actions';
import Notification from '../../services/Notification/Notification';

const addNotifications = byId => ({
    type: types.NOTIFICATION_GET_ALL,
    byId,
});

const getNotifications = () => dispatch => {
    dispatch(appActions.appIsLoading(true));
    Notification.getNotifications()
        .then( response => {
            dispatch(appActions.appIsLoading(false));
            if(!response.error) {
                dispatch(addNotifications(response.data.byId));
            }
        } )
        .catch( error => {
            dispatch(appActions.appIsLoading(false));
        })
};

const notificationActions = {
    getNotifications,
};

export default notificationActions;