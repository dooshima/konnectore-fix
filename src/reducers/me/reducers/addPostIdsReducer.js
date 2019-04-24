import Utility from "../../../services/Utility";

/**
 * Function to add post IDs to the store under the *me* key
 */

 const addPostIdsReducer = (postIds, action) => {
     if(!Utility.isset(action.postIds)) {
         return postIds;
     }

     return [...postIds, action.postIds];
 };

 export default addPostIdsReducer;