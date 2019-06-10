/**
 * This function will be used to add user's followers
 */

 const addFriendIdsReducer = (allIds, action) => {
    if (action.allIds === null) {
       return allIds;
    }

    return action.allIds;
 }

 export default addFriendIdsReducer;