/**
 * Function to provide the return user onto the store on successful login
 */

 const defaultUser = "";

 const authUploadAvatarReducer = (avatar, action) => {
     if(null === action.avatar) {
         return avatar;
     }

     return action.avatar;
 }

 export default authUploadAvatarReducer;