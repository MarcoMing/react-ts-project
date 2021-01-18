import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App';

import { CounterReducer } from './reducers';

//createStore(reducer,initialState = {},middleware)
const store = createStore(
  combineReducers({
    counter: CounterReducer
  })
);


// store.subscribe(function(){
//
// })

var mountNode = document.getElementById("app") as HTMLElement;
ReactDOM.render(
  <Provider store={ store }>
   <App name="Jane" />
  </Provider>,
  mountNode
);
