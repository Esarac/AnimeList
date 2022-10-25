import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './pages/App';
import store from './config/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function renderApp(){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderApp()

store.subscribe(renderApp)