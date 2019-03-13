/**
 * This function updates the store to show that searching has been triggered
 */
const defaultValue = false;

const startSearchReducer = (errorMessage, action) => {
    if(action.errorMessage === null) {
        return errorMessage;
    }

    return errorMessage;
}