import React from "react";
import Product from "./Product";
import Offer from "./Offer";
import "./productDetails.css";
export default function ProductDetails() {
  const [counter, setCounter] = React.useState(0);

  function plus() {
    setCounter((prevValue) => prevValue + 1);
  }
  function minus() {
    setCounter((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="productDetails">
      <header>
        <img src="./images/de-main.png" />
        <h2>Green Plant</h2>
      </header>
      <div className="hero">
        <div className="second-header">
          <div className="filter">
            <img src="./images/de-filter.png" />
            <p>filter</p>
          </div>
          <div className="arrow">
            <img src="./images/de-arrow.png" />
          </div>
        </div>

        <div className="hero-section">
          <div className="right">
            <div className="r1">Succulents</div>
            <div className="r2">
              <p>
                Succulents are a fascinating group of plants renowned for their
                ability to thrive in arid conditions. These botanical marvels
                have adapted to survive in environments with minimal wate
                availability, making them popular choices for low-maintenance
                gardening.
              </p>
              <div className="divs">
                <div className="div-one">
                  <h5>size</h5>
                  <h6>medium</h6>
                </div>
                <div className="div-two">
                  <h5>height</h5>
                  <h6>12.5cm</h6>
                </div>
                <div className="div-three">
                  <h5>category</h5>
                  <h6>green plants</h6>
                </div>
                <div className="div-four">
                  <h5>color</h5>
                  <h6>green</h6>
                </div>
              </div>
            </div>
            <div className="r3">
              <p>quintity</p>
              <p className="plus" onClick={plus}>
                +
              </p>
              <p className="res">{counter}</p>
              <p className="minus" onClick={minus}>
                -
              </p>
              <p>pric : 30.00$</p>
            </div>
            <div className="r4">
              <p className="rbtn">
                buy now <img src="./images/shape.png" />
              </p>
              <p className="lbtn">
                add to cart <img src="./images/shop.png" />
              </p>
            </div>
          </div>
          <div className="left">
            <img src="./images/de-p.png" className="de-main" height="500px" />
            <div className="review">
              <div className="stars">
                <img src="./images/de-star.png" />
                <img src="./images/de-star.png" />
                <img src="./images/de-star.png" />
                <img src="./images/de-fstar.png" />
              </div>
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
