import React from 'react';
import ReactDOM from 'react-dom';

import { AuthContexProvider } from './contexts/AuthContext';

import { Reset } from './styles/Reset';
import { GlobalStyles } from './styles/Global';

import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    
    <AuthContexProvider>
      <Routes />
    </AuthContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
