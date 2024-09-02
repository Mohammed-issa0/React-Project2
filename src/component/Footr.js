import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="one">
        <img src="./images/logo.png" />
        <p>
          owalos provide artificial handmade
          <br /> flowers to make your home beautiful
        </p>
      </div>
      <div className="two">
        <h2>quick links</h2>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>About us</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="three">
        <h2>contact us</h2>
        <div className="contactGroup">
          <p>
            <img src="./images/phone.png" /> <p>8979925</p>
          </p>
          <p>
            <img src="./images/main.png" /> <p>info@gmail.com</p>
          </p>
        </div>
      </div>
      <div className="four">
        <h2>follow us</h2>
        <div className="links">
          <img src="./images/fb.png" />
          <img src="./images/inst.png" />
          <img src="./images/tw.png" />
        </div>
      </div>
    </div>
  );
}
