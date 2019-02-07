import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import konnectoreStore from './reducers/user/reducer';
console.log(konnectoreStore)
const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        konnectoreStore,
        persistedState
    );

    store.subscribe(throttle(() => {
        saveState(store.getState);
    }, 1000));

    return store
}

export default configureStore;