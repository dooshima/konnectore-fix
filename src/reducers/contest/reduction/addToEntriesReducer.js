/**
 * Reducer file to upload the contest key of the store
 */

 const addToEntriesReducer = (entries, action) => {
     if(null === action.entries) {
         return entries;
     }

     return [...entries, action.entries];
 };

 export default addToEntriesReducer;