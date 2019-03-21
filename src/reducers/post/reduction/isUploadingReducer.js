/**
 * This function will be used to modify the isUploading status of the post section of the application
 */

 const isUploadingReducer = (isUploading, action) => {
     if (action.isUploading === null) {
        return isUploading;
     }
     return action.isUploading;
 }

 export default isUploadingReducer;