/**
 * Reducer file to upload the contest key of the store
 */

 const setUserRoleReducer = (userRole, action) => {
     if(null === action.userRole) {
         return userRole;
     }

     return action.userRole;
 };

 export default setUserRoleReducer;