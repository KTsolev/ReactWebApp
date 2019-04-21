import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/AppComponent/App.js';

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
