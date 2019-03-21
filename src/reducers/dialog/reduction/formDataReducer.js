/**
 * This function will be used to modify the isLoading status of the entire application
 */

 const formDataReducer = (formData, action) => {
     if (action.formData === null) {
        return formData;
     }
     return action.formData;
 }

 export default formDataReducer;