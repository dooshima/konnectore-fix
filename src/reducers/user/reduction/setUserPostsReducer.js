/**
 * Function to provide the return user onto the store on successful login
 */

 const setUserPostsReducer = (state, action) => {
     if(null === action.posts) {
         return state;
     }

     return action.posts;
 }

 export default setUserPostsReducer;