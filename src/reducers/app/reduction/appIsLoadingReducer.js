/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const appIsLoadingReducer = (isLoading, action) => {
     if (action.isLoading === null) {
        return isLoading;
     }
     return action.isLoading;
 }

 export default appIsLoadingReducer;