import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import searchReducers from './reducers/search/reducers';
import userReducers from './reducers/user/reducers';
import appReducers from './reducers/app/reducers';
import dialogReducers from './reducers/dialog/reducers';
import thunkMiddleware from 'redux-thunk';
import postReducers from './reducers/post/reducers';
import friendReducers from './reducers/friend/reducers';

const reducers = combineReducers({
    search: searchReducers,
    user: userReducers,
    app: appReducers,
    dialog: dialogReducers,
    post: postReducers,
    friend: friendReducers,
});

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        reducers,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );

    store.subscribe(throttle(() => {
        console.log(store.getState())
        saveState(store.getState());
    }, 1000));

    return store
}

export default configureStore;