/**
 * Function to set the search filter in the store object
 */

 const setSearchFilterReducer = (filter, action) => {
    if(action.filter === null) {
        return filter;
    }
    return action.filter;
 };
 
 export default setSearchFilterReducer;