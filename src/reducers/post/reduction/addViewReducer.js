/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const addViewReducer = (posts, action) => {
     if (action.view === null) {
        return posts;
     }

     const post = action.view;
     if(!post) {
         return posts;
     }
     const id = post.viewable_id;
     const item = {...posts[id], views_count: +posts[id].views_count + 1};
     return {...posts, [id]: item};
 }

 export default addViewReducer;