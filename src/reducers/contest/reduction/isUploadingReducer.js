/**
 * Reducer file to upload the contest key of the store
 */

 const isUploadingReducer = (isUploading, action) => {
     if(null === action.isUploading) {
         return isUploading;
     }

     return action.isUploading;
 };

 export default isUploadingReducer;