import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWishList } from "../../../network/wishListAPI";
import Style from "./general.module.css";

export default function General() {

  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    getWishList().then(data => setWishList(data.data.wishlist))

  },[])

  return (
    <div>
      <div className={Style["wish-general"]}>
        <div className={Style["wish-general-info"]}>
          <Link href="#" className={Style.link}>
            <span>General (0)</span>
          </Link>
          <div className={Style["general-content"]}>
            <div className={Style["content-info"]}>
              <span className={Style["wish-general-date"]}>Last updated: 1/28/2022</span>
              <span className={Style["wish-general-cost"]}>Total cost: 0.00</span>
            </div>
             {
               wishList.length > 0 &&
               wishList.map(product => <img src={`http://localhost:8080/images/${product?.images?.[0]}`} className={Style['card-img']}/>)
             }
            <div className={Style["content-btn"]}>
              <div className={Style.breakline}></div>
              <button disabled className={Style["addtobag-btn"]}>
                Add all to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
