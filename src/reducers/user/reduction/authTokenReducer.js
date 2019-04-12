/**
 * Fucntion to add error message to the store under user key 
 */

 const authTokenReducer = (authToken, action) => {
     if(null === action.authToken) {
         return authToken;
     }

     return action.authToken;
 }

 export default authTokenReducer;