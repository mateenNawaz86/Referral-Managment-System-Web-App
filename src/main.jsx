import "./index.css";
import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { persistor, store } from "./api/store.js";
import { BrowserRouter } from "react-router-dom";
import { ModalManager } from "./components/modalManager/modal-manager.jsx";
import { PersistGate } from "redux-persist/integration/react";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ModalManager />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
