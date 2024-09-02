import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="Hero">
      <div className="right">
        <p>arteficilal flowers</p>
        <h1>unique flowers delivered to your dooretep</h1>
        <p>
          owalos provide artificial handmade flowers to make your home beautiful{" "}
        </p>
        <button>Shop now</button>
        <div className="info">
          <div>
            10 M <br />
            product sold
          </div>
          <div>
            260 K <br />
            send gifts last year
          </div>
          <div>
            95 % <br />
            happy customers
          </div>
        </div>
        <div className="download">
          <div className="apple">
            <img src="./images/apple.png" width="15px" />
            <p>
              Available on the <br /> <span>app store</span>
            </p>
          </div>
          <div className="play">
            <img src="./images/play.png" width="15px" />
            <p>
              Get it on <br /> <span>google play</span>
            </p>
          </div>
        </div>
      </div>
      <div className="left">
        <img src="./images/hero--left.png" alt="plants" />
      </div>
    </div>
  );
}
