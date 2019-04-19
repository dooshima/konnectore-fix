import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import thunkMiddleware from 'redux-thunk';
/* import searchReducers from './reducers/search/reducers';
import userReducers from './reducers/user/reducers';
import appReducers from './reducers/app/reducers';
import dialogReducers from './reducers/dialog/reducers';
import postReducers from './reducers/post/reducers';
import friendReducers from './reducers/friend/reducers';
import contestReducers from './reducers/contest/reducers';
import { connectRouter } from 'connected-react-router'

const reducers = combineReducers({
    search: searchReducers,
    user: userReducers,
    app: appReducers,
    dialog: dialogReducers,
    post: postReducers,
    friend: friendReducers,
    contest: contestReducers,
});

export default (history) => combineReducers({
    router: connectRouter(history),
    search: searchReducers,
    user: userReducers,
    app: appReducers,
    dialog: dialogReducers,
    post: postReducers,
    friend: friendReducers,
    contest: contestReducers,
}); */

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducers';

export const history = createBrowserHistory();

/*export default function configureStore(preloadedState) {
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      compose(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          // ... other middlewares ...
        ),
      ),
    )
  
    return store
}*/

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        createRootReducer(history),
        persistedState,
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware
        ),
    );

    store.subscribe(throttle(() => {
        console.log(store.getState())
        saveState(store.getState());
    }, 1000));

    return store
}

export default configureStore;