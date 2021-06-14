import React from 'react';
import ReactDOM from 'react-dom';
import { merge } from 'lodash-es';
import { BrowserRouter } from 'react-router-dom';
import { environment } from './environments/environment';
import AppRoutes from './app/shared/app-routes/app-routes';
import 'antd/dist/antd.css';
const localStorageEnv = localStorage.getItem('env');
const env = localStorageEnv ? JSON.parse(localStorageEnv ?? '{}') : {};
window['__env'] = merge(environment, env);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
