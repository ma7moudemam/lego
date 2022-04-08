import React from "react";
import { Link } from "react-router-dom";
import Style from "./Personal.module.css";

export default function Personal() {
  return (
    <div className={Style["inner-content"]}>
      {/* personal things  */}
      <h1 className={Style.nameOfBlock}>Personal & Address Details</h1>
      <div className={Style["acc-block"]}>
        <span className={Style.heading}>LEGO® Account Details</span>
        <span className={Style["personal-text"]}>
          The LEGO ID is your gateway to logging into LEGO digital experiences,
          go here to edit your LEGO Account details
        </span>
        <div className={Style["wrapper-personal-btn"]}>
          <button className={Style["personal-btn"]}>
          <Link to={`/details`} style={{ textDecoration: "none", color: "white" }}>
          LEGO® Account Details
        </Link>
            </button>
          <div className={Style["personal-email"]}>
            <span className={Style["lego-account"]}>LEGO® Account Email</span>
            <span className={Style["personal-text"]}>-----@gmail.com</span>
          </div>
        </div>
      </div>
      <span className={Style["heading"]}>My Addresses</span>
      <div className={Style["address-block"]}>
        <div className={Style["address-wrapper"]}>
          <svg
            className={Style["address-svg"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42 42"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M42 24H0v-6h42z"></path>
              <path d="M18 0h6v42h-6z"></path>
            </g>
          </svg>
          <span className={Style["add-address"]}>Add New Address</span>
        </div>
      </div>
    </div>
  );
}


