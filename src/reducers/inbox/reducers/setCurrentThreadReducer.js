import Utility from "../../../services/Utility";

const setCurrentThreadReducer = (currentThread, action) => {
    if(!Utility.isset(action.currentThread)) {
        return currentThread;
    }

    return action.currentThread;
}

export default setCurrentThreadReducer;