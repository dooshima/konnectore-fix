/**
 * This function takes a text entered into the search box and adds it to the store on the queryText key
 * addByIdReducer()
 */

 const addEntryIdsReducer = (entryIds, action) => {
    if(action.entryIds === null) {
        return entryIds;
    }
    const actionEntrIds = action.entryIds;
    return [...entryIds, ...actionEntrIds];
 }

 export default addEntryIdsReducer;