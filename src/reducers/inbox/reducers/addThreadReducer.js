import Utility from "../../../services/Utility";

const addThreadReducer = (threads, action) => {
    if(!Utility.isset(action.thread)) {
        return threads;
    }

    const thread = action.thread;
    for(let i in threads) {
        let t = threads[i]; console.log(t, thread)
        if(t.sender_id == thread.sender_id && t.receiver_id == thread.receiver_id) {
            delete threads[i];

        }
    }
    return {...threads, [thread.thread_code]: thread};
}

export default addThreadReducer;