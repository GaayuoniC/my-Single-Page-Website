import { Life } from "../pages/Life";
import { Cv } from "../pages/Cv";
import { Contact } from "../pages/Contact";
import { HomePage } from "../Pages/HomePage";

import { useState } from "react";

import "./App.css";

function App() {
  //set the useState initial value to the 'home' page
  const [currentPage, setCurrentPage] = useState("home");

  //conditional rending for displaying pages
  function handleSelectCurrentPage(text) {
    setCurrentPage(text);
  }

  return (
    <>
      <ul className="header-container">
        {/* using onclick here along with the callback function for rending the 
        the various pages */}
        <li onClick={() => handleSelectCurrentPage("home")}>Home</li>
        <li onClick={() => handleSelectCurrentPage("life")}>Life</li>
        <li onClick={() => handleSelectCurrentPage("cv")}>CV</li>
        <li onClick={() => handleSelectCurrentPage("contact")}>Contact</li>
      </ul>
      {currentPage === "home" && <HomePage />}
      {currentPage === "cv" && <Cv />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "life" && <Life />}

      {/* <RootLayout/> */}
    </>
  );
}

export default App;
