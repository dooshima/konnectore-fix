/**
 * Function to add comments to the store
 */

 const addCommentsReducer = (commments, action) => {
     if(null === action.commments) {
         return comments;
     }

     const newComments = action.comments;
     return {...commments, newComments};
 };

 export default addCommentsReducer;