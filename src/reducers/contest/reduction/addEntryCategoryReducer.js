/**
 * Reducer file to upload the contest key of the store
 */

 const addEntryCategoryReducer = (entryCategory, action) => {
     if(null === action.entryCategory) {
         return entryCategory;
     }

     return action.entryCategory;
 };

 export default addEntryCategoryReducer;