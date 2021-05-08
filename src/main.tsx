import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import BgBubbles from '@comps/BgBubbles';
import GitHub from '@comps/GitHub';

import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BgBubbles />
    <GitHub />
    <ToastContainer autoClose={3000} closeOnClick />
  </React.StrictMode>,
  document.getElementById('root'),
);
