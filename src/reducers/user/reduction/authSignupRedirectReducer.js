/**
 * Function to provide the return user onto the store on successful login
 */

 const authSignupRedirectReducer = (signupRedirect, action) => {
     console.log(signupRedirect)
     if(null === action.signupRedirect) {
         return signupRedirect;
     }

     return action.signupRedirect;
 }

 export default authSignupRedirectReducer;