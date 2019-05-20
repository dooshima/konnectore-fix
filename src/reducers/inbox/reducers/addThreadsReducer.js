import Utility from "../../../services/Utility";

const addThreadsReducer = (threads, action) => {
    if(!Utility.isset(action.threads)) {
        return threads;
    }

    return action.threads;
}

export default addThreadsReducer;