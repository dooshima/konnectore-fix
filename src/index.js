import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './configureStore';
import JavascriptTimeAgo from 'javascript-time-ago'

// The desired locales.
import en from 'javascript-time-ago/locale/en'

// Initialize the desired locales.
JavascriptTimeAgo.locale(en)

const store = configureStore();

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
