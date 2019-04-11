/**
 * Function to provide the return user onto the store on successful login
 */

 const addUserPostsReducer = (state, action) => {
     if(null === action.posts) {
         return state;
     }

     return Object.assign(state, action.posts);
 }

 export default addUserPostsReducer;