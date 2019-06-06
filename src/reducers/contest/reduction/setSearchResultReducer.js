/**
 * Reducer file to upload the contest key of the store
 */

 const setSearchResultReducer = (search, action) => {
     if(null === action.search) {
         return search;
     }

     return action.search;
 };

 export default setSearchResultReducer;