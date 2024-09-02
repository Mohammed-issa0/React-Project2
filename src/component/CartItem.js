import React from "react";
import "./CartItem.css";
export default function CartItem(props) {
  return (
    <div className="CartItem">
      <img src={`./images/${props.img}`} />
      <div className="content">
        <div className="info">
          <p>Succulents</p>
          <p>- amount 1 +</p>
          <p>{props.price}</p>
        </div>
        <div className="edit">
          <img src="./images/delete.png" />
          <p>Edit Order</p>
        </div>
      </div>
    </div>
  );
}
