/**
 * This function takes a text entered into the search box and adds it to the store on the queryText key
 * addQueryTextReducer()
 */

 const defaultText = '';
 const addQueryTextReducer = (queryText=defaultText, action) => {
    if(queryText === null) {
        return queryText;
    }

    return action.queryText;
 }

 export default addQueryTextReducer;