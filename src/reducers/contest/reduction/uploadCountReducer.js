/**
 * Reducer file to upload the contest key of the store
 */

 const uploadCountReducer = (uploadCount, action) => {
     if(null === action.uploadCount) {
         return uploadCount;
     }

     return action.uploadCount;
 };

 export default uploadCountReducer;