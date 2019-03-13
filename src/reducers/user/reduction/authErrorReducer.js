/**
 * Fucntion to add error message to the store under user key 
 */

 const defaultMsg = "";

 const authErrorReducer = (errorMsg=defaultMsg, action) => {
     if(null === action.errorMsg) {
         return errorMsg;
     }

     return action.errorMsg;
 }

 export default authErrorReducer;