/**
 * This function takes a text entered into the search box and adds it to the store on the queryText key
 * addByIdReducer()
 */

 const addAllIdsReducer = (allIds, action) => {
    if(action.allIds === null) {
        return allIds;
    }

    return action.allIds;
 }

 export default addAllIdsReducer;