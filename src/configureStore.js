import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import searchReducers from './reducers/search/reducers';
import userReducers from './reducers/user/reducers';
import thunkMiddleware from 'redux-thunk';

const appReducers = combineReducers({
    search: searchReducers,
    user: userReducers,
});

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        appReducers,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );

    store.subscribe(throttle(() => {
        saveState(store.getState);
    }, 1000));

    return store
}

export default configureStore;