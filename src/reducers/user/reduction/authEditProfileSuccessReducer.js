/**
 * Function to provide the return user onto the store on successful login
 */

 const defaultUser = {};

 const authEditProfileSuccessReducer = (data=defaultUser, action) => {
     if(null === action.data) {
         return data;
     }
     const profile = action.data;
     return {...data, ...profile};
 }

 export default authEditProfileSuccessReducer;