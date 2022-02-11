import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImgProvider from './components/Context/Context';


ReactDOM.render(
  <React.StrictMode>
    <ImgProvider>
    <App />
    </ImgProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


