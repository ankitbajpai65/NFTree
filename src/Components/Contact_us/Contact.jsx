import FadeLoader from "react-spinners/FadeLoader";
import "./Contact.css";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);

  const handleSend = () => {
    const loader = ReactDOMServer.renderToString(
      <FadeLoader
        color={"green"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{ position: "absolute", top: "30%", left: "15%" }}
      />
    );
    const addElement = document.querySelector(".loadingSpinner");
    addElement.innerHTML = loader;
    addElement.classList.add("spinner");
    const elementToReplace = document.getElementsByClassName("form-input")[0];
    setTimeout(() => {
      elementToReplace.textContent =
        "Thank you for reaching out! Your message has been received, and we appreciate your interest. We will review your inquiry and get back to you as soon as possible.";
      elementToReplace.classList.add("contactRespond");
    }, 3000);
  };
  return (
    <>
      <div className="contact_container">
        <div className="contactHead">
          <p>Contact Us</p>
        </div>
        <div className="contactContent">
          <div className="contactMap">
            {isLoading ? (
              <FadeLoader
                color={"green"}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={{
                  left: "50%",
                  height: "450px",
                  top: "200px",
                }}
              />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7482654461505!2d78.05913497648466!3d29.929148574981838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949eeb13c236d%3A0xbd6910ed4b3e201b!2sEcohome%20technologies-%20Experience%20Beyond%20Imagination!5e0!3m2!1sen!2sin!4v1699197874427!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
          <div
            className="form-input"
            style={{
              width: "25vw",
              minWidth: "350px",
            }}
          >
            <span className="loadingSpinner"></span>
            <input type="text" name="name" placeholder="Full Name" />

            <input type="email" name="email" placeholder="Email" />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
            />
            <div className="form-button" style={{ marginBottom: "100px" }}>
              <button className="submit-button" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
