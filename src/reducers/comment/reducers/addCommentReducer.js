/**
 * Function to add comments to the store
 */

 const addCommentReducer = (commments, action) => {
     if(null === action.commment) {
         return comments;
     }

     const newComment = action.comment;
     const id = newComment[id];
     return {...commments, [id]: newComment};
 };

 export default addCommentReducer;