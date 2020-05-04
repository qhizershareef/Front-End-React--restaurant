import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import {ConfigureStore} from '../src/redux/configureStore'
import { Provider } from 'react-redux'
//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
// select emmet abbreviations true for javascript and other languages
const store= ConfigureStore(); 

class App extends Component {
  render() {
    //store is passed into the Main component as props, and thus using redux the state is stored seperately inorder to avoid problems with many components inside component.s
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
/*
function App() {
  
}
*/
export default App;