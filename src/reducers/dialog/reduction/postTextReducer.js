/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const postTextReducer = (postText, action) => {
     if (action.postText === null) {
        return postText;
     }
     return action.postText;
 }

 export default postTextReducer;