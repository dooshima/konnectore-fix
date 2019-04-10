/**
 * Function to provide the return user onto the store on successful login
 */

 const defaultUser = {};

 const authLogoutSuccessReducer = (data, action) => {
     console.log(data, action)
     if(null === action.data) {
         return data;
     }

     return action.data;
 }

 export default authLogoutSuccessReducer;