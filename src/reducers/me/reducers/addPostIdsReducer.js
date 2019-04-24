import Utility from "../../../services/Utility";

/**
 * Function to add post IDs to the store under the *me* key
 */

 const addPostIdsReducer = (postIds, action) => {
     if(!Utility.isset(action.postIds)) {
         return postIds;
     }
     const newIds = action.postIds;
     const ids = [...postIds, ...newIds];
     const pIds = [];
     for(let id of ids) {
         if(!pIds.includes(id)) {
             pIds.push(id);
         }
     }
     return pIds;
 };

 export default addPostIdsReducer;