import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.scss';
import App from './App';
import { orderReducer } from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(orderReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
