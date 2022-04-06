import React from "react";
import { Link } from "react-router-dom";
import WishlistSup from "../wishList/wishListContent/WishListSup"
import Style from "./Myorder.module.css"
export default function MyOrder() {
  return (
    <div>
      <div className={Style["inner-content"]}>
        {/* My orders */}
        <h1 className={Style.nameOfBlock}>My Orders</h1>
        <div className={Style["wrapper-order"]}>
          <span className={Style.heading}>Latest Order</span>
          <div className={Style["wrapper-orders"]}>
            <span className={Style["order-text"]}>You currently have no open orders.</span>
            <button className={Style["order-btn"]}>Start Shopping</button>
          </div>
        </div>

        {/* wish support  */}
        <WishlistSup/>
      </div>
    </div>
  );
}
