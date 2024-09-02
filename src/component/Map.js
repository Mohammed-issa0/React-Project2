import React from "react";
import "./Map.css";
export default function Map() {
  return (
    <div className="Map">
      <div className="con-map">
        <div className="left-content">
          <h2>billing adress</h2>
          <div className="inputs">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="inputs">
            <input type="text" placeholder="CITY" />
            <input type="text" placeholder="ADRESS" />
          </div>
          <h2>payment ditels</h2>
          <div className="inputs">
            <input type="text" placeholder="Name ON CARD" />
            <input type="text" placeholder="CREDIT CARD NUMBER" />
          </div>
          <div className="btns">
            <button>back</button>
            <button>send</button>
          </div>
        </div>
        <img src="./images/map.png" />
      </div>
    </div>
  );
}
