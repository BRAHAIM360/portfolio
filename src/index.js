import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import Sppiner from "./componenets/fullPageReaload";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
    <Suspense fallback={<Sppiner />}>
    <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
