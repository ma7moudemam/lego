import React from "react";
import "./ProductCart.css";
import ProductImg from "../../assets/imgs/Valentine Lovebirds.jpg";
import { Link } from "react-router-dom";

function ProductCart({ product }) {
  return (
    <div>
      <div className="product-cart">
        <div className="box">
          <div className="cardImage">
            <a className="wish" href="#">
              <i className="fas fa-heart"></i> Add to wish List
            </a>
            <img
              src={`http://localhost:8080/images/${product.images[0]}`}
              alt={product.name}
            />
            <p className="new">New</p>
          </div>
          <Link className="product-title" to="#">
            {product.name}
          </Link>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p className="price">{product.price}</p>
          <input type="button" value="Add to Bag" />
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
