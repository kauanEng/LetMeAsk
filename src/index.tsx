import React from 'react'; // NPM ADD NODE-SASS@^5.0.0 ESTA VERSÃO SUPORTA CREATE-REACT
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

