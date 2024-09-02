import React from "react";
import "./Offer.css";
export default function Offer() {
  return (
    <div className="Offer">
      <div className="rightOffer">
        <img className="main--photo" src="./images/offer.png" />
        <img className="badge--photo" src="./images/offer--badge.png" />
      </div>
      <div className="leftOffer">
        <h5>limited offer</h5>
        <h3>35% off only this fraiday and git special gift</h3>
        <button>
          grab it now <img src="./images/arrow.png" />
        </button>
      </div>
    </div>
  );
}
