import Utility from "../../../services/Utility";

/**
 * Function to add comment IDs to the store under the *me* key
 */

 const appendPostIdReducer = (postIds, action) => {
     if(!Utility.isset(action.postId)) {
         return postIds;
     }
     
     if(!postIds.includes(action.postId))
        return [...postIds, action.postId];
     
    return postIds;
 };

 export default appendPostIdReducer;