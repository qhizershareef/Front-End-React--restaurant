import React,{Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
class App extends Component{
  render(){
    return (
      <div>
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