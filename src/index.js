import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // redux bindings for react
import thunk from 'redux-thunk'; // to use promises for asynchronous actions
import { createStore, applyMiddleware, compose } from 'redux'; // to create the store and middleware
import reducers from './reducers/index.js';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
const store = createStore(reducers, {}, compose(applyMiddleware(...middleware)));

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
