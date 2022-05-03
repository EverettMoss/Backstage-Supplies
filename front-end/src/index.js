import React from 'react';
import ReactDOM from 'react-dom';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Costumes from './Components/Costumes';
import Props from './Components/Props';
import Home from './Components/Home';
import Login from './Components/Login';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>

)
  

/*
ReactDOM.render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
