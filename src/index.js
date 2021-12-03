import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Authentication } from './context/Authentication';

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <Authentication>
        <ScrollToTop />
        <App />
    </Authentication>
  </BrowserRouter>,
  document.getElementById("root")
);
