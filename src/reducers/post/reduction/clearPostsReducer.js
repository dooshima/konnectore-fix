import Utility from "../../../services/Utility";

/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const clearPostsReducer = (posts, action) => {
    if(!Utility.isset(action.byId))
        return posts;

    return action.byId;
 }

 export default clearPostsReducer;