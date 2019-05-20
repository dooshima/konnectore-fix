import Utility from "../../../services/Utility";

const addUserFollowingsReducer = (followings, action) => {
    if(!Utility.isset(action.followings)) {
        return followings;
    }

    return action.followings;
}

export default addUserFollowingsReducer;