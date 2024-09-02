import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard";
export default function Product() {
  return (
    <div className="Product">
      <h2>Our Products</h2>
      <div className="ProductCards">
        <ProductCard img="pro1.png" title="Succulents" price="30.00$" />
        <ProductCard img="pro2.png" title="Bromeliads" price="50.00$" />
        <ProductCard img="pro3.png" title="Calathea" price="40.00$" />
        <ProductCard img="pro4.png" title="Croton" price="20.00$" />
      </div>
      <div className="circuls">
        <div className="active"></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
