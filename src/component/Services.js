import React from "react";
import "./Services.css";
export default function Services() {
  return (
    <div className="Services">
      <h2>Our Services</h2>
      <div className="linear"></div>
      <div className="cards">
        <div className="card c1">
          <img src="./images/card1.png" />
          <p>
            Selling flower bouquets{" "}
            <img src="./images/arrow.png" className="arrow" />
          </p>
        </div>
        <div className="card c2">
          <img src="./images/card2.png" />
          <p>
            Selling <br />
            houseplants <img src="./images/arrow.png" className="arrow" />
          </p>
        </div>
        <div className="card c1">
          <img src="./images/card3.png" />
          <p>
            Packaging
            <br /> service <img src="./images/arrow.png" className="arrow" />
          </p>
        </div>
        <div className="card c2">
          <img src="./images/card4.png" />
          <p>
            Delivery <br /> service{" "}
            <img src="./images/arrow.png" className="arrow" />
          </p>
        </div>
      </div>
    </div>
  );
}
