
import searchReducers from './reducers/search/reducers';
import userReducers from './reducers/user/reducers';
import appReducers from './reducers/app/reducers';
import dialogReducers from './reducers/dialog/reducers';
import postReducers from './reducers/post/reducers';
import friendReducers from './reducers/friend/reducers';
import contestReducers from './reducers/contest/reducers';
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';

export default (history) => combineReducers({
    router: connectRouter(history),
    search: searchReducers,
    user: userReducers,
    app: appReducers,
    dialog: dialogReducers,
    post: postReducers,
    friend: friendReducers,
    contest: contestReducers,
});