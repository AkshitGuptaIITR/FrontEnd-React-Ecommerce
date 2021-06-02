import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router } from 'react-router-dom';
import { api } from "./urlCofig";
import axios from 'axios'
const token = window.localStorage.getItem('token');
window.store = store;

// This is used to call the api in react 

axios.defaults.baseURL = api;
axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '' ;
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();