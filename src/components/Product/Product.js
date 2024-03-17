import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <smal>By: {seller}</smal>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order soon </small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="main-button"
        >
          add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
