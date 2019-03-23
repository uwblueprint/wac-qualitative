import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // redux bindings for react
import thunk from 'redux-thunk'; // to use promises for asynchronous actions
import { createStore, applyMiddleware, compose } from 'redux'; // to create the store and middleware

import './index.css';
import App from './App';
import reducers from './reducers/index.js';
import * as serviceWorker from './serviceWorker';
import initialStore from './initialStore';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initialStore,
    composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
