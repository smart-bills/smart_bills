import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import history from './history';
import Bill from './components/Bill'

ReactDOM.render(
      <Router history={history}>
        <App />
        <Bill />
      </Router>
    ,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// {/* reportWebVitals(); */}
