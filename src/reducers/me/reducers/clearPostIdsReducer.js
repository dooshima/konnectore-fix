import Utility from "../../../services/Utility";

/**
 * Function to add post IDs to the store under the *me* key
 */

 const clearPostIdsReducer = (postIds, action) => {
     if(!Utility.isset(action.postIds)) {
         return postIds;
     }
     console.log(action.postIds, action)
     return action.postIds;
 };

 export default clearPostIdsReducer;