/**
 * This function will be used to add user's followers
 */

 const setFriendReducer = (current, action) => {
    if (action.current === null) {
       return current;
    }
    return action.current;
 }

 export default setFriendReducer;