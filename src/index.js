import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Routes>
    <Route path = '/' element = {<App />}></Route>
  </Routes>
  </HashRouter>
);
