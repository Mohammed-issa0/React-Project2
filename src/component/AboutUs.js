import React from "react";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="AboutUs">
      <h2>About Us</h2>
      <p>this site for those who admire the beauty and harmony of nature</p>
      <div className="boxes">
        <div className="box">
          <img src="./images/1.png" />
          <h3>large assortment</h3>
          <p>
            we offer our customers more than 15.000 items of natural and
            artiificial flower, tress and many accessories for floristry{" "}
          </p>
        </div>
        <div className="box">
          <img src="./images/2.png" />
          <h3>free&fast shipping</h3>
          <p>
            we will ship your goods after receipt of founds to the current a
            ccount, choose the most convenient from the offerd delivery option
          </p>
        </div>
        <div className="box">
          <img src="./images/3.png" />
          <h3>24/7 support</h3>
          <p>
            we work seven days a week and a lunch break,we willbe glad to
            welcome you as our buyer and thank you for your trust in ue{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
