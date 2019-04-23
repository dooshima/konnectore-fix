/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const addPostsReducer = (posts, action) => {
     if (action.byId === null) {
        return posts;
     }
     return Object.assign(posts, action.byId);
 }

 export default addPostsReducer;