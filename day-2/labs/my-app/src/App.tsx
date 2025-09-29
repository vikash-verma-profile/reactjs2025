import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import OutputList from './OutputList';

function App() {
  return (

    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className='navbar-brand' to="/">SPA</Link>
          <div>
            <Link className='nav-link text-light me-3' to="/">Home</Link>
            <Link className='nav-link text-light me-3' to="/about">About</Link>
            <Link className='nav-link text-light' to="/contact">Contact</Link>
            <Link className='nav-link text-light' to="/profile">Account</Link>
             <Link className='nav-link text-light' to="/samplelist">outputList</Link>
          </div>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/samplelist" element={<OutputList />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
