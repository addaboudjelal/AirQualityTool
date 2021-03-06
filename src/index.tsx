import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import Openaq, { OpenaqContext } from './components/Openaq';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * With Openaq, OpenaqContext Component we provide methodes to fetch data from OpenAQ API
 */

ReactDOM.render(
  <React.StrictMode>
    <OpenaqContext.Provider value={new Openaq()}>
      <App />
    </OpenaqContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
