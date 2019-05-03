import Utility from "../../../services/Utility";

/**
 * Reducer function for adding notifications.
 */

 const addNotifications = (byId={}, action) => {
    if(!Utility.isset(action.byId)) {
        return byId;
    }

    return action.byId;
 };

 export default addNotifications;