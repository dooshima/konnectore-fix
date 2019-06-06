import Utility from "../../../services/Utility";

const clearMessageReducer = (messages, action) => {
    if(!Utility.isset(action.message)) {
        return messages;
    }

    return action.message;
}

export default clearMessageReducer;