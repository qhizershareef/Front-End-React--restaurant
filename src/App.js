import React,{Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
class App extends Component{
  render(){
    return (
      <div >
          <Main/>
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