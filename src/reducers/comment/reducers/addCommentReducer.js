/**
 * Function to add comments to the store
 */

 const addCommentReducer = (comments, action) => {
     if(null === action.commment) {
         return comments;
     }

     const newComment = action.comment;
     const id = newComment['id'];
     return {...comments, [id]: newComment};
 };

 export default addCommentReducer;