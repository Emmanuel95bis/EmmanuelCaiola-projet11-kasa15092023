/*import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./components/Home";
import Banner from "./components/Banner";
import Apropos from "./components/Apropos";
import Error from "./components/Error";
import Fiche from "./components/Fiche";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);*/

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
