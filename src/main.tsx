import React from 'react'
import ReactDOM from 'react-dom'

import BgBubbles from '@comps/BgBubbles';

import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BgBubbles />
  </React.StrictMode>,
  document.getElementById('root')
)