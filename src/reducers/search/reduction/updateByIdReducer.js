/**
 * This function takes a text entered into the search box and adds it to the store on the queryText key
 * updateByIdReducer()
 */

 const updateByIdReducer = (byId, action) => {
    if(action.byId === null) {
        return byId;
    }

    const newById = action.byId;
    return {...byId, ...newById};
 }

 export default updateByIdReducer;