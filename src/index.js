import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import RootRouter from 'components/routers/Root';
import '@styles/index.scss';
import StoreProvider from '@store/config';
import { ToastContainer } from 'react-toastify';
import ModalRenderer from '@organisms/modal/ModalRenderer';
import GridLayout from 'react-grid-layout';
const layouta = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
  { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  { i: 'd', x: 4, y: 0, w: 1, h: 2 },
];

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <RootRouter />
      <ModalRenderer />
      <ToastContainer
        autoClose={3000}
        closeOnClick={true}
        position='top-right'
        hideProgressBar={true}
        theme='colored'
      />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
