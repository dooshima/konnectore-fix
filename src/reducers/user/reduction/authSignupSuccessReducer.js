/**
 * Function to provide the return user onto the store on successful login
 */

 const defaultUser = {};

 const authSignupSuccessReducer = (account, action) => {
     if(null === action.account) {
         return account;
     }

     return action.account;
 }

 export default authSignupSuccessReducer;