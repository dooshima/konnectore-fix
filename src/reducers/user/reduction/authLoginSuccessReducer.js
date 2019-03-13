/**
 * Function to provide the return user onto the store on successful login
 */

 const defaultUser = {};

 const authLoginSuccessReducer = (data=defaultUser, action) => {
     if(null === action.data) {
         return data;
     }

     return action.data;
 }

 export default authLoginSuccessReducer;