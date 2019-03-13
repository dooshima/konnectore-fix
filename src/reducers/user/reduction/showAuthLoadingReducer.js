/**
 * Function to toggle the Auth Loading process status
 */

 const defaultValue = false;

 const showAuthLoadingReducer = (isLoading=defaultValue, action) => {
     if(action.isLoading === null) {
         return isLoading;
     }

     return action.isLoading;
 }

 export default showAuthLoadingReducer;

