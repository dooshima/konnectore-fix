/**
 * Reducer file to upload the contest key of the store
 */

 const addEntriesReducer = (entries, action) => {
     if(null === action.entries) {
         return entries;
     }

     return action.entries;
 };

 export default addEntriesReducer;