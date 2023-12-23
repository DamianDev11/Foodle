import React, { useState } from "react";
import "../App.css";

const ProductList = ({ products,addToCart }) => {
  return (
    <div className="flex">
      {products.map((product, index) => {
        return (
          <div key={index} style={{ width: "50%" }}>
            <div className="product-item">
            <img
              src={product.url}
              width="40%"
              height="40%"
              alt={product.name}
            />
            <p>
              {product.name} | {product.category}
            </p>
            <p>{product.seller}</p>
            <p>{product.price}</p>
            <button onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
