/**
 * Function to provide the return user onto the store on successful login
 */

 const addSuggestionReducer = (account, action) => {
     if(null === action.suggestion) {
         return account;
     }

     return {...account, suggestion: action.suggestion};
 }

 export default addSuggestionReducer;