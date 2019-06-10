import Utility from "../../../services/Utility";

/**
 * This function will be used to add user's followers
 */

 const growFriendsReducer = (friends, action) => {
    if (!Utility.isset(action.grow_friends)) {
       return friends;
    }

    const newFriends = action.grow_friends;
    return newFriends; //[...friends, ...newFriends];
 }

 export default growFriendsReducer;