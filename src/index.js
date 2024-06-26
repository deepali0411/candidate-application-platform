import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './reducers/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.subscribe(() => store.getState());
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
