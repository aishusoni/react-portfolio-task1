import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './testcss.css';
import App from './portfolio/AppPortfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppReducer from './practice/AppReducer';
// import Test from './testing';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppReducer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

