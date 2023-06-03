import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./reducers";
import swDev from './swDev';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer,composeWithDevTools());
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
);
swDev();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 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
