import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/productDetails";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Offer from "./component/Offer";
import Services from "./component/Services";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Map from "./component/Map";
import OfferPage from "./component/offerPage";
import Footer from "./component/Footr";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Offer />
      <OfferPage />
      <Services />
      <Product />
      <Map />
      <ProductDetails />
      <Cart />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
