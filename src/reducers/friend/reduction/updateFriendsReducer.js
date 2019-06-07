/**
 * This function will be used to add user's followers
 */

 const updateFriendsReducer = (friends, action) => {
     if (action.friends === null) {
        return friends;
     }
     const friend = action.friend;
     const id = friend.user_id;
     //console.log(friend, friends)
     //const updated = {...friends[id], following: friend.following}    
     return Object.assign(friends, {[id]: friend});
     //return {...friends, byId}
 }

 export default updateFriendsReducer;