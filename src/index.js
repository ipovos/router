import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppNext from './AppNext';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

// export const modal = document.createElement('div');
// modal.id = 'modal';
// document.body.appendChild(modal);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppNext />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
