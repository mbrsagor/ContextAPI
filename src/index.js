import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'fomantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
