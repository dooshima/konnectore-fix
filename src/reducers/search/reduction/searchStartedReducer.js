/**
 * This function updates the store to show that searching has been triggered
 */
const defaultValue = false;

const searchStartedReducer = (isSearching, action) => {
    if(action.isSearching === null) {
        return isSearching;
    }

    return action.isSearching;
}

export default searchStartedReducer;