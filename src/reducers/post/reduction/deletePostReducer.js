import Utility from "../../../services/Utility";

/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const deletePostReducer = (posts, action) => {
     if (!Utility.isset(action.post_id)) {
        return posts;
     }

     const post_id = action.post_id;
     if(!post_id) {
         return posts;
     }
     delete posts[post_id];
     return posts;
 }

 export default deletePostReducer;