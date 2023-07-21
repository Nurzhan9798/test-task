import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/style/index.css';
import App from 'app/App';
import {StoreProvider} from "app/providers/StoreProvider";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <StoreProvider>
              <App />
          </StoreProvider>
      </BrowserRouter>
  </React.StrictMode>
);

