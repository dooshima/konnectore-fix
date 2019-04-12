/**
 * This function will be used to add user's followers
 */

 const addFollowersReducer = (followers, action) => {
     if (action.followers === null) {
        return followers;
     }
     return action.followers;
 }

 export default addFollowersReducer;