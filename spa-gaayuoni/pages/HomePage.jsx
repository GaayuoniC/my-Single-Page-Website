// import { Header } from "../components/Header";
import { RandomQuotes } from "../components/RandomQuotes";
import christian from "../src/images/christian.jpeg";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-container">
      <div className="container-item-1">
        <h2>
          Frontend Developer <br /> living in Germany
        </h2>
      </div>
      <div className="container-item-2">
        <img id="main-christian-page" src={christian} alt="christian" />
      </div>
      <div className="container-item-3">
        <p>
          Welcome!
          <br /> My name is Christian and am originally from Ghana. Having spent
          the first half of my life pursuing two of my dreams in life, I have
          now gotten to the point where I finally get the opportunity to achieve
          my last dream, that is finally venturing into the world of IT. So here
          I am, starting a carrier change and venturing into the world of
          software development in Germany.
        </p>
        <p>
          This is just the beginning of the development of my own website which
          I started developing right from the first day that I started my
          <strong> Frontend Web and App </strong> developement Bootcamp with{" "}
          <strong>
            <a
              href="https://talents.taktsoft.com/"
              rel="noreferrer"
              target="_blank"
            >
              Taktsoft Campust Talents{" "}
            </a>
          </strong>{" "}
          in Bonn, Germany.
        </p>
      </div>
      <div className="quotes-container">
        <RandomQuotes />
      </div>
    </div>
  );
}
