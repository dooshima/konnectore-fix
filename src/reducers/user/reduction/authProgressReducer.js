/**
 * Fucntion to add error message to the store under user key 
 */

 const authProgressReducer = (authProgress, action) => {
     if(null === action.authProgress) {
         return authProgress;
     }

     return action.authProgress;
 }

 export default authProgressReducer;