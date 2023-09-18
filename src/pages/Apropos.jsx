import "../styles/Apropos.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useState } from "react";
import OpenClose from "../components/apropos/OpenClose";

function Apropos() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div>
      <Header />
      <Banner SelectImage={"image2"} />

      <div className="apropos-details">
        {OpenClose(0, isOpen, setIsOpen)}
        {OpenClose(1, isOpen2, setIsOpen2)}
        {OpenClose(2, isOpen3, setIsOpen3)}
        {OpenClose(3, isOpen4, setIsOpen4)}

        <Footer />
      </div>
    </div>
  );
}
export default Apropos;
