/**
 * Reducer file to upload the contest key of the store
 */

 const entryFilePathReducer = (entryFilePath, action) => {
     if(null === action.entryFilePath) {
         return entryFilePath;
     }

     return action.entryFilePath;
 };

 export default entryFilePathReducer;