/**
 * Function to provide the return user onto the store on successful login
 */

 const addFollowingsReducer = (state, action) => {
     if(null === action.followings) {
         return state;
     }

     return Object.assign(state, action.followings);
 }

 export default addFollowingsReducer;