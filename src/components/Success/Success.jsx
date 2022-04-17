import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "./../Layout/Layout";
import "./Success.css";
// clear cart

export default function Success() {
  //on mount get orders from cart
  // post orders to order collection with user data from token
  // admin will recive the order
  //admin will assign shipper for the order
  // order state is pending
  // shipper will get updated by the order
  //shipper will update (withShipper, isShipped, isDeliverd, isCanceled)
  // user will have get tracker ui

  return (
    <>
      <div className="success">
        <h1>🎉 Thank you for your order 🎉</h1>
        <p>
          We are currently processing your order and will send you a
          confirmation email shortly
        </p>
      </div>
      <div className="success-button">
        <NavLink to="/home">
          <button onClick={() => {}} className="home-button">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </>
  );
}
