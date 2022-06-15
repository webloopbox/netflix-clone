import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';

import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    play: {
      main: '#ffffff',
      contrastText: 'black'
    },
    moreInfo: {
      main: '#6c6c6e',
      contrastText: 'white'
    },
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Navigate to='/browse' />} />
            <Route path="/browse" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);