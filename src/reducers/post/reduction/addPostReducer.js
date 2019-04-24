/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const addPostReducer = (posts, action) => {
     if (action.post === null) {
        return posts;
     }

     const post = action.post;
     if(!post) {
         return posts;
     }
     const id = post.id;   
     //const allIds = [...posts.allIds, id];
     
     //const byId = Object.assign(posts, {[id]: post});
     //console.log(post, posts, byId)
     return {...posts, ...{[id]: post}};
 }

 export default addPostReducer;