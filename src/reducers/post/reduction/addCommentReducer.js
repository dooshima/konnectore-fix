/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const addCommentReducer = (comments, action) => {
     if (action.like === null) {
        return posts;
     }

     const post = action.like;
     if(!post) {
         return posts;
     }
     const id = post.likeable_id;
     const item = {...posts[id], likes_count: +posts[id].likes_count + 1};
     return {...posts, [id]: item};
 }

 export default addCommentReducer;