import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { Reset } from './styles/Reset';
import { GlobalStyles } from './styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
