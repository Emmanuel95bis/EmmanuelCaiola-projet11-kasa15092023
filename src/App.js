import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Fiche from "./pages/Fiche";
import Apropos from "./pages/Apropos";

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
