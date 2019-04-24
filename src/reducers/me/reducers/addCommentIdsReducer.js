import Utility from "../../../services/Utility";

/**
 * Function to add comment IDs to the store under the *me* key
 */

 const addCommentIdsReducer = (commentIds, action) => {
     if(!Utility.isset(action.commentIds)) {
         return commentIds;
     }

     return [...commentIds, action.commentIds];
 };

 export default addCommentIdsReducer;