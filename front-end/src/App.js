import logo from './logo.svg';
import './App.css';
import React from 'react';
import Costumes from './Components/Costumes';
import Props from './Components/Props';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/costumes" element= {<Costumes/>}/>
        <Route path="/props" element= {<Props/>}/>

      </Routes>
  
      

    </div>
  );
}

export default App;
