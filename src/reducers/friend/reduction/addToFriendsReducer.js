import Utility from "../../../services/Utility";

/**
 * This function will be used to add user's followers
 */

 const addToFriendsReducer = (friends, action) => {
    if (!Utility.isset(action.friends)) {
       return friends;
    }

    const newFriends = action.friends;
    return {...friends, ...newFriends};
 }

 export default addToFriendsReducer;