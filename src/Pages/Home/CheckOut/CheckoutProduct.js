import React from "react";
import "./checkoutProduct.css";

const CheckoutProduct = ({ product }) => {
  const { img, title, price, rating } = product;
  return (
    <div className="checkout-product-container">
      <img src={img} alt={title} />
      <div className="checkout-product-info">
        <h2>{title}</h2>
        <b>
          <p>Price : ${price}</p>
        </b>
        <div className="rating">
          Rating :
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
