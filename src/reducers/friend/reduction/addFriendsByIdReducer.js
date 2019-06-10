/**
 * This function will be used to add user's followers
 */

 const addFriendsByIdReducer = (byId, action) => {
    if (action.byId === null) {
       return byId;
    }
    const nById = action.byId;
    return {...byId, ...nById};
 }

 export default addFriendsByIdReducer;