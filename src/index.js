import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { OldLogin } from './components/OldLoginForm';

import { store } from './features/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import { counter } from './components/testing.js'

console.log("Z pliku index.js: ", counter);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oldlogin" element={<OldLogin />} />
      </Routes>
    </Router>

  </Provider>,
  document.getElementById('root')
);