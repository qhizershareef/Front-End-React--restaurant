import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import Main from './components/MainComponent';
import {ConfigureStore} from '../src/redux/configureStore'

//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
// select emmet abbreviations true for javascript and other languages
const store= ConfigureStore(); 
//fucking shit the store is the place for providing props to all the components through out the app
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