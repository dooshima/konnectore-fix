/**
 * Function to provide the return user onto the store on successful login
 */

 const addUserCommentsReducer = (comments, action) => {
     console.log(action)
     if(null === action.comments) {
         return comments;
     }

     return action.comments;
 }

 export default addUserCommentsReducer;