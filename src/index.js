import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from "redux";

import App from './App'
import index from "./reducers";

ReactDOM.render(
    <Provider store={createStore(index)}>
        <App />
    </Provider>, document.querySelector('#root'));

