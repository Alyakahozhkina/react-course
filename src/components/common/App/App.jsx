import React, { memo } from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from '../../../router/Router';
import axiosInterceptor from '../../../thunks/axiosInterceptor';
import 'react-toastify/dist/ReactToastify.css';
import config from './app.config';

const {
  appClass,
  toastContainerClass,
  limitNumber,
  topRightPosition,
  autoCLoseTime,
  falseFlag,
  coloredTheme,
} = config;

axiosInterceptor();

const App = memo(() => (
  <div className={appClass}>
    <Router />
    <ToastContainer
      className={toastContainerClass}
      limit={limitNumber}
      position={topRightPosition}
      autoClose={autoCLoseTime}
      hideProgressBar={falseFlag}
      newestOnTop={falseFlag}
      closeOnClick
      rtl={falseFlag}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={coloredTheme}
    />
  </div>
));

export default App;
