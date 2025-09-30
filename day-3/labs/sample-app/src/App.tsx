import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);

  return (
      <div>
        <h1>Conditional Rendering</h1>

        {isLoggedIn?<p>Welcome back,User !</p>:<p>Please log in.</p>}

        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Logout":"Login"}</button>
      </div>
  );
}

export default App;
