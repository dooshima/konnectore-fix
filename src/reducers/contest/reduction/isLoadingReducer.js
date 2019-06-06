/**
 * Reducer file to upload the contest key of the store
 */

 const isLoadingReducer = (loading, action) => {
     if(null === action.requesting) {
         return loading;
     }

     return action.requesting;
 };

 export default isLoadingReducer;