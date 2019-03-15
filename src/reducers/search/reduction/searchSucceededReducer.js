/**
 * Function to update the store with search results on success
 */

 const searchSucceededReducer = (searchResult, action) => {
     if(null === action.searchResult) {
         return searchResult;
     }

     return action.searchResult;
 };

 export default searchSucceededReducer;