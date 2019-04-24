import Utility from "../../../services/Utility";

/**
 * Function to add comment IDs to the store under the *me* key
 */

 const addCommentIdsReducer = (commentIds, action) => {
     if(!Utility.isset(action.commentIds)) {
         return commentIds;
     }
     const newIds = action.commentIds;
     const ids = [...commentIds, ...newIds];
     const cIds = [];
     for(let id of ids) {
         if(!cIds.includes(id)) {
             cIds.push(id);
         }
     }
     return cIds;
 };

 export default addCommentIdsReducer;