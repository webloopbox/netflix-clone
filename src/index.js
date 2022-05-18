import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';

import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);