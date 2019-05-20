import Utility from "../../../services/Utility";

const addMessageReducer = (messages, action) => {
    if(!Utility.isset(action.message)) {
        return messages;
    }

    const message = action.message;
    return {...messages, [message.id]: message};
}

export default addMessageReducer;