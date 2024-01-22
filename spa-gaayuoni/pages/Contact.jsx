import "./Contact.css";
export function Contact() {
  return (
    <>
      <h1> My Contact </h1>
      <div className="contact-container">
        <p>
          <span className="contact-container-item"> Email: </span>
          gayuoni@proton.me
        </p>
        <p>
          <span className="contact-container-item"> Telephone:</span> 0049 (0)
          15219 313 987
        </p>
        <p>
          <span className="contact-container-item"> Github: </span>
          <a href="https://github.com/GaayuoniC" target="_blank">
            GaayuoniC
          </a>
        </p>
        <p>
          <span className="contact-container-item"> Linkedin: </span>{" "}
          <a
            href="http://www.linkedin.com/in/christian-gaayuoni-5950b132/"
            target="_blank"
          >
            Christian Gaayuoni
          </a>
        </p>
      </div>
    </>
  );
}
