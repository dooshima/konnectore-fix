/**
 * Function to provide the return user onto the store on successful login
 */

 const defaultUser = {};

 const authEditProfileSuccessReducer = (data=defaultUser, action) => {
     console.log(data, action.data);
     if(null === action.data) {
         return data;
     }

     return {...data, profileData: action.data}
 }

 export default authEditProfileSuccessReducer;