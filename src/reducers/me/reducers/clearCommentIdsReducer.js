import Utility from "../../../services/Utility";

/**
 * Function to add comment IDs to the store under the *me* key
 */

 const clearCommentIdsReducer = (commentIds, action) => {
     if(!Utility.isset(action.commentIds)) {
         return commentIds;
     }
     console.log(action.commentIds, action)
     return action.commentIds;
 };

 export default clearCommentIdsReducer;