import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      const label = input.previousElementSibling;

      const handleFocus = () => {
        label.style.transform = "translateY(-25px)";
        label.style.transition = "transform 0.3s ease";
      };

      const handleBlur = () => {
        if (input.value === "") {
          label.style.transform = "translateY(-8px)";
        }
      };

      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);

      return () => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      };
    });
  }, []);

  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <div className="square">
        <div className="rights">
          <img src="./images/contact.png" alt="Contact" />
        </div>
        <div className="left">
          <h2>Contact</h2>
          <form id="form" action="/">
            <div className="firstLine">
              <div className="input-control">
                <label htmlFor="fname" className="lab" data-lang="fname">
                  First Name
                </label>
                <input type="text" name="fname" id="fname" />
                <div className="error"></div>
              </div>

              <div className="input-control">
                <label htmlFor="lname" className="lab" data-lang="lname">
                  Last Name
                </label>
                <input type="text" name="lname" id="lname" />
                <div className="error"></div>
              </div>
            </div>

            <div className="input-control">
              <label htmlFor="email" className="lab" data-lang="email">
                Email
              </label>
              <input type="email" name="email" id="email" />
              <div className="error"></div>
            </div>

            <div className="input-control">
              <label htmlFor="text" data-lang="text">
                Message
              </label>
              <input type="text" name="text" id="text" />
              <div className="error"></div>
            </div>

            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
