import React from "react";

import CardImg from "../../assets/imgs/1.jpg";

export default function Cards() {
  return (
    <div>
          <div className="card">
            <div className="add-to-wishlist">
              <span>
                <i className="far fa-heart"></i>
              </span>
              <span>Add to wish list</span>
            </div>
            <img src={CardImg} className="card-img" />
            <div className="new-item">new</div>
            <div className="card-name">
              <p>
                <a href="#">Heartlake City Park</a>
              </p>
            </div>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <div className="card-price">$79.99</div>
            <button className="card-button-exist">
              <a href="#">Add to Bag</a>
            </button>
          </div>
    </div>
  );
}
