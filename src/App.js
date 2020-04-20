import React,{Component} from 'react';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuList';
import {DISHES} from './shared/dishes';
//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
class App extends Component{
  render(){
    return (
      <div >
        <Navbar dark color="danger" id="navbar">
            <div className="container">
              <NavbarBrand href="/" id="nav">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={DISHES}/>
      </div>
    );
  } 
}
/*
function App() {
  
}
*/
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