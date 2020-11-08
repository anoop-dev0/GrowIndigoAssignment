import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes/>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);