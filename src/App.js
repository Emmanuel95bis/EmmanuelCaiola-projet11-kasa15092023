import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Fiche from "./components/pages/Fiche";
import Apropos from "./components/pages/Apropos";

function App() {
  return (
    <Routes>
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/fiche/:ident" element={<Fiche />} />
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
