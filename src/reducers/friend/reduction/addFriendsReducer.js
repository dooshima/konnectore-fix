/**
 * This function will be used to add user's followers
 */

 const addFriendsReducer = (friends, action) => {
    if (action.friends === null) {
       return friends;
    }
    return action.friends;
 }

 export default addFriendsReducer;