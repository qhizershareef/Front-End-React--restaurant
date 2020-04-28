import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';

//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
// select emmet abbreviations true for javascript and other languages
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
      );
  } 
}
/*
function App() {
  
}
*/
export default App;