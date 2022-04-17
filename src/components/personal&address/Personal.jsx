import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Style from "./Personal.module.css";
import jwt_decode from "jwt-decode";

export default function Personal() {
	const [users, setUsers] = useState(() => jwt_decode(localStorage.getItem("token")));

  
	// const handelLogOutAction = () => {
	// 	localStorage.removeItem("token");
	// 	Navigate("/");
	// };

  return ( 
          <div className={Style["inner-content"]}>
            {/* personal things  */}
            <h1 className={Style.nameOfBlock}>Personal & Address Details</h1>
            <div className={Style["acc-block"]}>
              <span className={Style.heading}>LEGO® Account Details</span>
              <span className={Style["personal-text"]}>
                The LEGO ID is your gateway to logging into LEGO digital
                experiences, go here to edit your LEGO Account details
              </span>
              <div className={Style["wrapper-personal-btn"]}>
                <button className={Style["personal-btn"]}>
                  <Link
                    to={`/details`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    LEGO® Account Details
                  </Link>
                </button>
                <div className={Style["personal-email"]}>
                  <span className={Style["lego-account"]}>
                    LEGO® Account Email
                  </span>
                  <span className={Style["personal-text"]}>
                    {users.user.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
  );
}
