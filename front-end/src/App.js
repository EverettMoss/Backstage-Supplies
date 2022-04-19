import logo from './logo.svg';
import './App.css';
import React from 'react';

import Costumes from './Components/Costumes';
import Props from './Components/Props';
import Home from './Components/Home'
import Login from './Components/Login';

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import bslogo from './static/backstage supplies logo.png'

function App() {
  return (
    <div className="App">
      <Navbar bg="evergreen" variant="dark"> 
      <Navbar.Brand>
        <img src={bslogo} height={90} width={155}/>
        BackStage Supplies
      </Navbar.Brand>
      
      <Nav>
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="costumes">Costumes</Nav.Link>
        <Nav.Link href="props">Props</Nav.Link>
        <Nav.Link href="login">Login</Nav.Link>
      </Nav>

      </Navbar>
      <Routes>
        <Route path="/costumes" element= {<Costumes/>}/>
        <Route path="/props" element= {<Props/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/" element= {<Home/>}/>
      </Routes>
      
  
      

    </div>
  );
}

export default App;
