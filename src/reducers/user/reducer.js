import { combineReducers } from "redux";
const initialState = {};
const userUpdateProfile = (state=initialState) => {
    return state;
}
const konnectoreStore = combineReducers({ user: userUpdateProfile});
export default konnectoreStore;