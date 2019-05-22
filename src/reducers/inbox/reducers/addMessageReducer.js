import Utility from "../../../services/Utility";

const addMessageReducer = (messages, action) => {
    if(!Utility.isset(action.message)) {
        return messages;
    }

    const message = action.message;
    console.log(message)
    return {...messages, ...message};
    //return action.message;
}

export default addMessageReducer;