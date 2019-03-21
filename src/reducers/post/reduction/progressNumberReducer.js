/**
 * This function will be used to modify the progressNumber value of the post being uploaded in the application
 */

 const progressNumberReducer = (progressNumber, action) => {
     if (action.progressNumber === null) {
        return progressNumber;
     }
     return action.progressNumber;
 }

 export default progressNumberReducer;