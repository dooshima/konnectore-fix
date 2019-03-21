/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const showDMReducer = (showDM, action) => {
     if (action.showDM === null) {
        return showDM;
     }
     return action.showDM;
 }

 export default showDMReducer;