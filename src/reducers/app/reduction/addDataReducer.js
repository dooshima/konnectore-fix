/**
 * This function will be used to modify the data key of the entire application
 */

 const addDataReducer = (data, action) => {
     if (action.data === null) {
        return data;
     }
     return action.data;
 }

 export default addDataReducer;