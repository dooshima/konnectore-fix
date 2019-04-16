/**
 * Reducer file to upload the contest key of the store
 */

 const setContestDataReducer = (data, action) => {
     if(null === action.data) {
         return data;
     }

     return action.data;
 };

 export default setContestDataReducer;