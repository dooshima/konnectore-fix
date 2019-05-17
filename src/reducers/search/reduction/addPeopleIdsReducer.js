/**
 * This function takes a text entered into the search box and adds it to the store on the queryText key
 * addByIdReducer()
 */

 const addPeopleIdsReducer = (peopleIds, action) => {
    if(action.peopleIds === null) {
        return peopleIds;
    }
    const actionPersonIds = action.peopleIds;
    return [...peopleIds, ...actionPersonIds];
 }

 export default addPeopleIdsReducer;