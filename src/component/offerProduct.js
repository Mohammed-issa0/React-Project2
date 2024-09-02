import React from "react";
import "./offerProduct.css";
export default function offerProduct(props) {
  return (
    <div className="offerProduct">
      <img src={`./images/${props.img}`} className="mp" />
      <img src="./images/sale.png" className="sale" />

      <div className="first-line">
        <p>lavender</p>
        <div className="stars">
          <img src="./images/stars.png" />
        </div>
        <div className="like">
          <img src="./images/like.png" />
        </div>
      </div>

      <p className="second-line">green plant pot mockup</p>

      <div className="third-line">
        <p className="d35">35.00$</p>
        <p className="d20">20.00$</p>
        <img src="./images/cart1.png" />
      </div>
    </div>
  );
}
