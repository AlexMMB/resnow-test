import React from 'react';


import logo from './logo.svg';
import './App.css';
import './index.css';
import './components/login.css';
import './components/register.css';
import './components/navbar.css';
import './components/login-admin.css';  

import MenuCliente from './components/menu-booking';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
