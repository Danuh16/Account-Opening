import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Redux/Reducers';
import { Provider } from 'react-redux';


const storage=configureStore({reducer:reducer});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store={storage}>
    <App />

  </Provider>
  </React.StrictMode>
);
