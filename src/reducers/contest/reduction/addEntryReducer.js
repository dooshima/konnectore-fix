/**
 * Reducer file to upload the contest key of the store
 */

 const addEntryReducer = (entry, action) => {
     if(null === action.entry) {
         return entry;
     }

     return action.entry;
 };

 export default addEntryReducer;