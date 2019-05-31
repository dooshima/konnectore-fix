import Utility from "../../../services/Utility";

/**
 * Function to add comment IDs to the store under the *me* key
 */

 const popPostIdReducer = (postIds, action) => {
     if(!Utility.isset(action.postId)) {
         return postIds;
     }
     
     if(postIds.includes(action.postId)) {
         const index = postIds.indexOf(action.postId);
         postIds.splice(index, 1);
         return postIds;

     }
     
    return postIds;
 };

 export default popPostIdReducer;