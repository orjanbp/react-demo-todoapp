import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TodoStoreProvider } from './store/TodoStore';
import { defaultTheme } from './utils/theme';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoStoreProvider>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </TodoStoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
