import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//to keep tract of global state from anywhere
import {reducers} from './reducers';
import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

//as now we have made our reducers file iindex.js
//we wrap the APP with < provider>
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));
