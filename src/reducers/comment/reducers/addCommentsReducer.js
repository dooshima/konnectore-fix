/**
 * Function to add comments to the store
 */

 const addCommentsReducer = (comments, action) => {
     if(null === action.commments) {
         return comments;
     }

     const newComments = action.comments;
     return {...comments, ...newComments};
 };

 export default addCommentsReducer;