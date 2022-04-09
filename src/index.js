import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./assets/fonts/Cera Pro Bold.otf";
import "./assets/fonts/Cera Pro Light.otf";
import "./assets/fonts/Cera Pro Medium.otf";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Redux
import {store} from './Redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);