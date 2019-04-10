/**
 * Function to toggle the Auth Loading process status
 */

 const defaultValue = false;

 const showCheckUsernameReducer = (available=defaultValue, action) => {
     if(action.available === null) {
         return available;
     }

     return action.available;
 }

 export default showCheckUsernameReducer;

