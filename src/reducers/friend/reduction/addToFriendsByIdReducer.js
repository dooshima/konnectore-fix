import Utility from "../../../services/Utility";

/**
 * This function will be used to add user's followers
 */

 const addToFriendsByIdReducer = (byId, action) => {
    if (!Utility.isset(action.byId)) {
       return byId;
    }

    const newFriends = action.byId;
    return {...byId, ...newFriends};
 }

 export default addToFriendsByIdReducer;