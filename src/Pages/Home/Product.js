import React from "react";
import "./Product.css";
const Product = ({title,price,img,rating}) => {
  return (
    <div className="product-container">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          <p>{rating}</p>
        </div>
      </div>
      <img
        src={img}
        alt=""
        srcSet=""
      />
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
