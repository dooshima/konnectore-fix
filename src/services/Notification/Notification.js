import Server from '../Server/Server';
import Constants from './../../assets/Constants';

const Notification = {
    getNotifications,
};

function getNotifications (token) {
  return Server.authGet('api/get-notifications', token)
    .then( response => response.data );
}

export default Notification;