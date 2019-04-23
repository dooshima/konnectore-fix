/**
 * This function will be used to add user's followers
 */

 const addPostIdsReducer = (postIds, action) => {
    if (action.postIds === null) {
       return postIds;
    }
    return action.postIds;
 }

 export default addPostIdsReducer;