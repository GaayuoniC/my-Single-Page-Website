import { Life } from "../pages/Life";
import { Cv } from "../pages/Cv";
import { Contact } from "../pages/Contact";
import { HomePage } from "./HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../pages/RootLayout.css";

import { useState } from "react";

export function RootLayout() {
  const [currentPage, setCurrentPage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleSelectCurrentPage(text) {
    setCurrentPage(text);
  }

  function handleMenuIsDisplayed() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <nav>
        <div className="logo"> Christian Gaayuoni</div>
        {isMobileMenuOpen ? (
          <FontAwesomeIcon
            className="mobile-menu-button"
            icon={faXmark}
            onClick={handleMenuIsDisplayed}
          />
        ) : (
          <FontAwesomeIcon
            className="mobile-menu-button"
            icon={faBars}
            onClick={handleMenuIsDisplayed}
          />
        )}

        <ul className="desktop-menu">
          <li onClick={() => handleSelectCurrentPage("home")}>Home</li>
          <li onClick={() => handleSelectCurrentPage("life")}>Life</li>
          <li onClick={() => handleSelectCurrentPage("cv")}>CV</li>
          <li onClick={() => handleSelectCurrentPage("contact")}>Contact</li>
        </ul>
        {isMobileMenuOpen ? (
          <ul className="mobile-menu">
            <li onClick={() => handleSelectCurrentPage("home")}>Home</li>
            <li onClick={() => handleSelectCurrentPage("life")}>Life</li>
            <li onClick={() => handleSelectCurrentPage("cv")}>CV</li>
            <li onClick={() => handleSelectCurrentPage("contact")}>Contact</li>
          </ul>
        ) : (
          ""
        )}
      </nav>

      {currentPage === "cv" && <Cv />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "life" && <Life />}
      {currentPage === "home" && <HomePage />}
    </>
  );
}
