import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import searchReducers from './reducers/search/reducers';
import userReducers from './reducers/user/reducers';
import appReducers from './reducers/app/reducers';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    search: searchReducers,
    user: userReducers,
    app: appReducers,
});

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        reducers,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );

    store.subscribe(throttle(() => {
        saveState(store.getState);
    }, 1000));

    return store
}

export default configureStore;