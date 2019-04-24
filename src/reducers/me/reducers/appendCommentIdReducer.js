import Utility from "../../../services/Utility";

/**
 * Function to add comment IDs to the store under the *me* key
 */

 const appendCommentIdReducer = (commentIds, action) => {
     if(!Utility.isset(action.commentId)) {
         return commentIds;
     }
     console.log(action, action.commentId);
     if(!commentIds.includes(action.commentId))
        return [...commentIds, action.commentId];
     
    return commentIds;
 };

 export default appendCommentIdReducer;