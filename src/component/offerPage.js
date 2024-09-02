import React from "react";
import "./offerPage.css";
import OfferProduct from "./offerProduct";
export default function offerPage(props) {
  return (
    <div className="offerPage">
      <h1>spiceal plants withe offer</h1>
      <div className="offers">
        <OfferProduct img="offer2.png" />
        <OfferProduct img="offer2.png" />
        <OfferProduct img="offer2.png" />
      </div>
      <div className="offers">
        <OfferProduct img="offer2.png" />
        <OfferProduct img="offer2.png" />
        <OfferProduct img="offer2.png" />
      </div>
    </div>
  );
}
