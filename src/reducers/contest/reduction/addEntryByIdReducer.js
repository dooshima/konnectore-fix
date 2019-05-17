/**
 * Reducer file to upload the contest key of the store
 */

 const addEntryByIdReducer = (byId, action) => {
     if(null === action.byId) {
         return byId;
     }

    const actionById = action.byId;
     return {...byId, ...actionById};
 };

 export default addEntryByIdReducer;