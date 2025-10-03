import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
   <Router>
    <Routes>
    <Route path='/about' Component={About} />
    </Routes>
   </Router>
  );
}

export default App;
