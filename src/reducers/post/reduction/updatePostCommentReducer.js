/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const updatePostCommentReducer = (posts, action) => {
     if (action.comment === null) {
        return posts;
     }

     const comment = action.comment;
     if(!comment) {
         return posts;
     }
     const id = comment.id;   
     const postId = comment.commentable_id;
     const post = posts[postId];
     const comments = post.comments;
     const commentIds = post.commentIds;
     //const newComments = {...comments, ...{[id]: comment}};
     const newComments = {...comments, id};

     //const newIds = [...commentIds, id]; // commentIds: newIds
     const newPost = {...post, comments: newComments, comments_count: +post.comments_count + 1};
     return {...posts, [postId]: newPost};
     //return byId;
 }

 export default updatePostCommentReducer;