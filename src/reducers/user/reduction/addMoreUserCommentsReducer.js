/**
 * Function to provide the return user onto the store on successful login
 */

 const addUserCommentsReducer = (state, action) => {
     if(null === action.comments) {
         return state;
     }

     return Object.assign(state, action.comments);
 }

 export default addUserCommentsReducer;