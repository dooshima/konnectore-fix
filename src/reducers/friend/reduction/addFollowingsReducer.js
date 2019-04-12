/**
 * This function will be used to add user's followers
 */

 const addFollowingsReducer = (followings, action) => {
     if (action.followings === null) {
        return followings;
     }
     return action.followings;
 }

 export default addFollowingsReducer;