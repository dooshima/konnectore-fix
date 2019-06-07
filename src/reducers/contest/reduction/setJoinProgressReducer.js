/**
 * Reducer file to upload the contest key of the store
 */

 const setJoinProgressReducer = (progress, action) => {
     if(null === action.progress) {
         return progress;
     }

     return action.progress;
 };

 export default setJoinProgressReducer;