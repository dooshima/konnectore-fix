/**
 * This function takes a text entered into the search box and adds it to the store on the queryText key
 * addByIdReducer()
 */

 const addPeopleByIdReducer = (peopleById, action) => {
    if(action.peopleById === null) {
        return peopleById;
    }
    const actionPersonById = action.peopleById;
    return {...peopleById, ...actionPersonById};
 }

 export default addPeopleByIdReducer;