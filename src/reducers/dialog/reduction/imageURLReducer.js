/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const imageURLReducer = (dataImageURL, action) => {
     if (action.dataImageURL === null) {
        return dataImageURL;
     }
     return action.dataImageURL;
 }

 export default imageURLReducer;