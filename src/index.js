import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/style.scss';
import App from './components/app/App';
import { BrowserRouter } from 'react-router';

// background: url('../../resources/img/own_bg.webp') no-repeat center/cover;

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  // </React.StrictMode>
);

