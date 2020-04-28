import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-social/bootstrap-social.css";
import * as serviceWorker from './serviceWorker';


//lets try without strict mode <React.StrictMode>
ReactDOM.render(
 
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
