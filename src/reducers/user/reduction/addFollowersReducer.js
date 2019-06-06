/**
 * Function to provide the return user onto the store on successful login
 */

 const addFollowersReducer = (state, action) => {
     if(null === action.followers) {
         return state;
     }

     return Object.assign(state, action.followers);
 }

 export default addFollowersReducer;