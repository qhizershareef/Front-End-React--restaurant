import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="danger" id="navbar">
          <div className="container">
            <NavbarBrand href="/" id="nav">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
    </div>
  );
}

export default App;
/*Inside div className="App"
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
*/