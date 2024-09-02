import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
export default function Cart() {
  return (
    <div className="Cart">
      <div className="right">
        <h1>cart</h1>
        <p>check your cart items before proceeding to payment</p>
        <div className="items">
          <CartItem img="fplant.png" price="30.00$" />
          <CartItem img="splant.png" price="20.00$" />
          <CartItem img="fplant.png" price="50.00$" />
        </div>
      </div>
      <div className="left">
        <h1>summary order</h1>

        <div className="input">
          <input type="text" placeholder="promocode" />
          <button className="apply-btn">Apply</button>
        </div>

        <div className="total">
          <div className="total-info">
            <h4>total</h4>
            <p>100.00$</p>
          </div>
          <div className="total-info">
            <h4>shipping</h4>
            <p>10.00$</p>
          </div>
          <div className="total-info">
            <h4>total cost</h4>
            <p>110.00$</p>
          </div>
        </div>

        <button className="fbtn">next</button>

        <button className="sbtn">back</button>
      </div>
      <div className="bottom">
        <div className="head">
          <h2>payment</h2>
          <div className="pay">
            <img src="./images/add.png" /> add payment card
          </div>
        </div>
        <div className="visa">
          <img src="./images/visa.png" />
          <p>visa debit card</p>
          <p>**** **** **** 2314</p>
          <img src="./images/gdone.png" />
        </div>
        <div className="visa">
          <img src="./images/mastercard.png" />
          <p>master card</p>
          <p>**** **** **** 2314</p>
          <img src="./images/wdone.png" />
        </div>
      </div>
      <div className="bottmImage">
        <img src="./images/bottom.png" />
      </div>
    </div>
  );
}
