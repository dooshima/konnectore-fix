/**
 * This function will be used to add user's followers
 */

 const updateFriendsReducer = (friends, action) => {
     if (action.friends === null) {
        return friends;
     }
     const friend = action.friend;
     const id = friend.user_id;
     const updated = {...friends.byId[id], following: friend.following}    
     const byId = Object.assign(friends.byId, {[id]: updated});
     return {...friends, byId}
 }

 export default updateFriendsReducer;