import React from "react";
import "./ProductCard.css";
export default function ProductCard(props) {
  return (
    <div className="ProductCard">
      <img className="main" src={`./images/${props.img}`} />
      <p className="title">{props.title}</p>
      <p className="price">{props.price}</p>
      <img src="./images/addToCard.png" className="addToCard" />
    </div>
  );
}
