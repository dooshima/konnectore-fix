
/*
This reducer function takes in the current search state and action objec
which containes the type of action to be taken and the value to e assigned
It modifies the showSearhForm key to the value passed
*/

const defaultValue = false;
const showSearchFormReducer = (show=defaultValue, action) => {
    if(action.show === null) {
        return show;
    }

    return action.show;
};

export default showSearchFormReducer;