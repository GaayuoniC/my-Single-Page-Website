import { Life } from "../pages/Life";
import { Cv } from "../pages/Cv";
import { Contact } from "../pages/Contact";
import { HomePage } from "./HomePage";
import "../pages/RootLayout.css";

import { useState } from "react";

export function RootLayout() {
  const [currentPage, setCurrentPage] = useState("");

  const MENU = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Life",
      link: "#",
    },
    {
      title: "CV",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ];

  function handleSelectCurrentPage(text) {
    setCurrentPage(text);
  }

  return (
    <>
      <nav>
        <div className="logo"> Christian Gaayuoni</div>

        <ul className="desktop-menu">
          <li onClick={() => handleSelectCurrentPage("home")}>Home</li>
          <li onClick={() => handleSelectCurrentPage("life")}>Life</li>
          <li onClick={() => handleSelectCurrentPage("cv")}>CV</li>
          <li onClick={() => handleSelectCurrentPage("contact")}>Contact</li>
        </ul>
        <ul className="mobile-menu">
          <li onClick={() => handleSelectCurrentPage("home")}>Home</li>
          <li onClick={() => handleSelectCurrentPage("life")}>Life</li>
          <li onClick={() => handleSelectCurrentPage("cv")}>CV</li>
          <li onClick={() => handleSelectCurrentPage("contact")}>Contact</li>
        </ul>
      </nav>

      {currentPage === "cv" && <Cv />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "life" && <Life />}
      {currentPage === "home" && <HomePage />}
    </>
  );
}
