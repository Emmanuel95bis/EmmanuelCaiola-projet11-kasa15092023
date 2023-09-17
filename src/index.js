import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./components/Home";
import Error from "./components/Error";
import Fiche from "./components/Fiche";
import Apropos from "./components/Apropos";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche/:ident" element={<Fiche />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
