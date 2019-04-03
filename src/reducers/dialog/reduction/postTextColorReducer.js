/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const postTextColorReducer = (postTextColor, action) => {
     if (action.postTextColor === null) {
        return postTextColor;
     }
     return action.postTextColor;
 }

 export default postTextColorReducer;