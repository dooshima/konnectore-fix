/**
 * Function to provide the return user onto the store on successful login
 */

 const updateUsernameReducer = (data, action) => {
     if(null === action.username) {
         return data;
     }

     return {...data, username: action.username}
 }

 export default updateUsernameReducer;